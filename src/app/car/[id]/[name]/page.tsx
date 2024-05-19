"use client"
import Container from '@/components/Container/Container'
import { IconLoading, IconWhatsapp } from '@/components/Utils/Icons'
import { db } from '@/data/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Router } from 'next/router'
import Input from '@/components/Input/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Metadata from '@/components/Utils/Metadata'

interface ICarsProps {
  id: string
  model: string
  name: string
  year: string
  uid: string
  price: string | number
  city: string
  km: string
  description: string
  created: string
  owner: string
  whatsApp: string
  images: ICarImagesProps[]
}

interface ICarImagesProps {
  name: string
  uid: string
  url: string
}

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().min(1, "O email é obrigatório"),
  phone: z.string().min(1, "O numero é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
    message: "Numero de telefone invalido"
  }),
  message: z.string().min(1, "Não esqueça da mensagem")
})

type FormData = z.infer<typeof schema>

const CarDetails = (): React.JSX.Element => {
  const [car, setCar] = useState<ICarsProps>()
  const { id } = useParams<{ id: string }>()
  const [sliderPerView, setSliderPerView] = useState<number>(3)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  useEffect(() => {
    async function loadCar() {
      if (!id) { return }
      const docRef = doc(db, "cars", id)
      getDoc(docRef)
        .then((snapshot) => {
          if (!snapshot.data()) {
            return router.push("/")
          }
          setCar({
            id: snapshot.id,
            name: snapshot.data()?.name,
            year: snapshot.data()?.year,
            city: snapshot.data()?.city,
            model: snapshot.data()?.model,
            uid: snapshot.data()?.uuid,
            description: snapshot.data()?.description,
            created: snapshot.data()?.created,
            whatsApp: snapshot.data()?.whatsApp,
            price: snapshot.data()?.price,
            km: snapshot.data()?.km,
            owner: snapshot.data()?.owner,
            images: snapshot.data()?.images
          })
        })
        .catch(error => console.log(error)
        )
    }
    loadCar()
  }, [id])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPerView(1);
      } else {
        setSliderPerView(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  function onSubmit(data: FormData) {
    function sendMessage(): void {
      const message = `${data.message},
        Meu nome é: ${data.name},
        Meu email é: ${data.email},
        Meu telefone é: ${data.phone}.
        `;
      const number = car && car.whatsApp;
      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${message}`;
      window.open(url, '_blank');
    }
    reset()
    sendMessage()
  }

  return (
    <>
      {car && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={sliderPerView}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation
        >
          {car?.images.map((image) => (
            <SwiperSlide key={image.name}>
              <Image
                priority
                alt='car image'
                src={image.url}
                width={1000}
                height={1000}
                className='w-full h-96 object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <Container>
        {car ? (
          (
            <section className='grid sm:grid-cols-6 gap-x-3'>
              <Metadata
                seoTitle={car.name}
                seoDescription={`carStore - Detalhes do ${car.name}`} />
              <main className='w-full bg-white rounded-lg p-6 my-4 col-span-4 h-auto max-h-[520px]'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4'>
                  <h1 className='font-bold text-2xl sm:text-3xl text-black/80'>{car?.name}</h1>
                </div>
                <p className='text-black/60'>{car.model}</p>
                <section className='flex w-full gap-6 my-4'>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p>Cidade</p>
                      <strong>{car?.city}</strong>
                    </div>
                    <div>
                      <p>Ano</p>
                      <strong>{car?.year}</strong>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p>KM</p>
                      <strong>{car?.km}</strong>
                    </div>
                  </div>
                </section>

                <strong>Descrição</strong>
                <p className='mb-4'>{car?.description}</p>

                <div className='flex justify-normal items-center'>
                  <div className='w-full'>
                    <strong>WhatsApp</strong>
                    <p>{car?.whatsApp}</p>
                  </div>
                  <div className='w-full flex justify-center items-center bg-green-500 border border-green-700 rounded-2xl text-white p-2 transition-all duration-300 hover:bg-green-700 gap-x-2'>
                    <button>Envie Mensagem para o vendedor</button>
                    {IconWhatsapp()}
                  </div>
                </div>
              </main>

              <section className='w-full bg-white rounded-lg p-6 my-4 col-span-4 sm:col-span-2 h-au'>
                <h1 className='font-bold text-2xl sm:text-3xl text-black/80'>R$ {car?.price}</h1>
                <p className='text-xs text-black/50 font-bold mt-2'>Envie uma mensagem diretamente para o vendedor</p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col gap-y-5 mt-10'>
                  <Input
                    type='text'
                    register={register}
                    name="name"
                    placeholder='Nome'
                    error={errors.name?.message}
                  />

                  <Input
                    type='text'
                    register={register}
                    name="email"
                    placeholder='E-mail'
                    error={errors.email?.message}
                  />

                  <Input
                    type='text'
                    register={register}
                    name="phone"
                    placeholder='Telefone'
                    error={errors.phone?.message}
                  />

                  <Input
                    className='h-24'
                    type='text'
                    register={register}
                    name="message"
                    placeholder='Escreva Sua mensagem'
                    error={errors.message?.message}
                  />
                  <button
                    type='submit'
                    className='w-full h-10 rounded-md bg-red-600 text-white font-medium transition-all duration-300 hover:bg-red-700'>Enviar Mensagem</button>
                </form>
              </section>

            </section>
          )
        ) : (
          <div className='h-screen w-full flex justify-center items-center animate-spin'>{IconLoading}</div>
        )}
      </Container>
    </>
  )
}

export default CarDetails