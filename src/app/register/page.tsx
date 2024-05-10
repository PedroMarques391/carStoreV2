"use client"
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import Logo from '@/components/Utils/Logo'
import { auth } from '@/data/firebase.config'
import { useAuth } from '@/hooks/useAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  fullName: z.string().min(1, "O Nome é obrigatório"),
  email: z.string().email("Insira um E-mail válido").min(1, "O E-mail é obrigatório"),
  password: z.string().min(6, "A Senha é deve ter pelo menos 6 caracteres"),
})

type FormData = z.infer<typeof schema>

const Register = (): React.JSX.Element => {
  const router = useRouter()

  const { handleInfoUser } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  const onSubmit = (data: FormData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        console.log(user);
        await updateProfile(user.user, {
          displayName: data.fullName
        })
        handleInfoUser({
          uid: user.user.uid,
          email: data.email,
          fullName: data.fullName
        })
        console.log(`Deu bom`);
        router.push("/dashboard", { scroll: true })
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    async function handleLogout(): Promise<void> {
      await signOut(auth)
    }
    handleLogout()
  }, [])

  return (
    <Container>
      <div className='flex justify-center items-center w-full min-h-screen gap-5 flex-col'>
        <Link href={"/"} className='mb-6 max-w-sm w-full text-center'>
          <Logo />
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white drop-shadow max-w-xl w-full rounded-lg p-4'>

          <div className='mb-3'>
            <Input
              name='fullName'
              placeholder='Nome completo...'
              type='text'
              error={errors.fullName?.message}
              register={register}
            />
          </div>

          <div className='mb-3'>
            <Input
              name='email'
              placeholder='Digite seu E-mail...'
              type='email'
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className='mb-3'>
            <Input
              name='password'
              placeholder='Digite sua Senha'
              type='password'
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button type='submit' className='bg-zinc-900 w-full rounded-md h-10 font-medium text-white'>Criar conta</button>
        </form>
      </div>
    </Container>
  )
}

export default Register