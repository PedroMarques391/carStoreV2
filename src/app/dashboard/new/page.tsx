"use client"
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import DashboardHeader from '@/components/PanelHeader/PanelHeader'
import { IconTrash, IconUpload } from '@/components/Utils/Icons'
import Label from '@/components/Utils/Label'
import { db, storage } from '@/data/firebase.config'
import { useAuth } from '@/hooks/useAuth'
import Private from '@/routes/Private'
import { zodResolver } from '@hookform/resolvers/zod'
import { Firestore, addDoc, collection } from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidV4 } from 'uuid'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  model: z.string().min(1, "O modelo é obrigatório"),
  year: z.string().min(1, "O ano é obrigatório"),
  km: z.string().min(1, "A kilometragem é obrigatória"),
  price: z.string().min(1, "Informe o preço"),
  city: z.string().min(1, "A cidade é obrigatória"),
  whatsApp: z.string().min(1, "O telefone é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
    message: "Numero de telefone invalido"
  }),
  description: z.string().min(1, "A descrição é obrigatória")
})

type FormData = z.infer<typeof schema>

interface IImageItemProps {
  uid: string
  name: string
  previewUrl: string
  url: string
}

const RegisterCar = (): React.JSX.Element => {
  const { user } = useAuth()
  const [images, setImages] = useState<IImageItemProps[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: FormData) {
    if (images.length === 0) {
      return alert("Você precisa adicionar uma imagem do carro.")
    }

    const carListImages = images.map((car) => {
      return {
        uid: car.uid,
        name: car.name,
        url: car.url
      }
    })

    addDoc(collection(db, "cars"), {
      name: data.name,
      model: data.model,
      year: data.year,
      km: data.km,
      price: data.price,
      city: data.city,
      whatsApp: data.whatsApp,
      description: data.description,
      created: new Date(),
      owner: user?.fullName,
      uuid: user?.uid,
      images: carListImages
    })
      .then((data) => {
        console.log(data);
        reset()
        setImages([])
        
      })
      .catch((error) => {
        console.log(error);

      })

  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if (image.type === "image/jpeg" || image.type === "image/png") {
        return handleUpload(image)
      } else {
        return alert("Envie uma imagem em PGN ou JPG")
      }
    }
  }

  function handleUpload(image: File) {
    if (!user?.uid) {
      return
    }
    const currentUID = user?.uid
    const uidImage = uuidV4()

    const uploadRef = ref(storage, `images/${currentUID}/${uidImage}`)

    uploadBytes(uploadRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((downlaodUrl) => {
            const imageItem = {
              name: uidImage,
              uid: currentUID,
              previewUrl: URL.createObjectURL(image),
              url: downlaodUrl,
            }
            setImages((images) => [...images, imageItem])
          })
      })

  }

  async function handleDeleteImage(item: IImageItemProps) {
    const imagePath = `images/${item.uid}/${item.name}`
    const imageRef = ref(storage, imagePath)

    try {
      await deleteObject(imageRef)
      setImages(images.filter((car) => car.url !== item.url))
    } catch (error) {
      console.log(error, "Erro ao deletar imagem");

    }
  }

  return (
    <Private>
      <Container>
        <DashboardHeader />

        <div className='w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2'>
          <button className='border-2 w-42 rounded-lg flex items-center justify-center cursor-pointer h-32 border-gray-600 md:w-48'>
            <div className='absolute cursor-pointer'>{IconUpload}</div>
            <div className='cursor-pointer'>
              <input
                onChange={handleFile}
                type="file"
                accept='image/*'
                className='opacity-0 cursor-pointer' />
            </div>
          </button>

          {images.map((car) => (
            <section key={car.uid} className='h-32 w-full flex justify-center items-center relative'>
              <button
                onClick={() => handleDeleteImage(car)}
                className='absolute'>{IconTrash}</button>
              <Image
                className='rounded-lg object-cover w-full h-32'
                src={car.previewUrl}
                alt={"Preview"}
                height={300}
                width={300}
                priority
              />
            </section>
          ))}

        </div>

        <div className='w-full bg-white rounded-lg p-3 flex flex-col sm:flex-row items-center gap-2 mt-3'>
          <form
            className='w-full'
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className="mb-3">
              <Label>Nome do Carro</Label>
              <Input
                type='text'
                register={register}
                name="name"
                placeholder='Honda civic preto'
                error={errors.name?.message}
              />
            </div>

            <div className="mb-3">
              <Label>Modelo do Carro</Label>
              <Input
                type='text'
                register={register}
                name="model"
                placeholder='Touring automático'
                error={errors.model?.message}
              />
            </div>

            <div className='flex w-full mb-3 gap-4'>
              <div className='w-full'>
                <Label>Ano</Label>
                <Input
                  type='text'
                  register={register}
                  name="year"
                  placeholder='2018/2019'
                  error={errors.year?.message}
                />
              </div>
              <div className='w-full'>
                <Label>KM</Label>
                <Input
                  type='text'
                  register={register}
                  name="km"
                  placeholder='30.000'
                  error={errors.km?.message}
                />
              </div>
            </div>

            <div className='flex w-full mb-3 gap-4'>
              <div className='w-full'>
                <Label>Valor</Label>
                <Input
                  type='text'
                  register={register}
                  name="price"
                  placeholder='136.999'
                  error={errors.price?.message}
                />
              </div>
              <div className='w-full'>
                <Label>Cidade</Label>
                <Input
                  type='text'
                  register={register}
                  name="city"
                  placeholder='Belém - PA'
                  error={errors.city?.message}
                />
              </div>
            </div>

            <div className="mb-3">
              <Label>WhatsApp</Label>
              <Input
                type='text'
                register={register}
                name="whatsApp"
                placeholder='(91)987538433'
                error={errors.whatsApp?.message}
              />
            </div>

            <div className="mb-3">
              <Label>Descrição</Label>
              <textarea
                className='w-full border-2 h-24 rounded-md px-2 outline-none'
                {...register("description")}
                name="description"
                id="description"
                placeholder='Teto solar, central multimidía, bancos de couro'
              />
              {errors.description && <p className='my-2 text-red-600'>{errors.description?.message}</p>}
            </div>
            <button
              type='submit'
              className='w-full h-10 rounded-md bg-zinc-900 text-white font-medium'>Cadastrar Veículo</button>
          </form>
        </div>
      </Container>
    </Private>
  )
}

export default RegisterCar