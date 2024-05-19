"use client"
import Input from '@/components/Input/Input'
import Logo from '@/components/Utils/Logo'
import { auth } from '@/data/firebase.config'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Metadata from '../../components/Utils/Metadata'

const schema = z.object({
  email: z.string().email("Insira um E-mail válido").min(1, "O E-mail é obrigatório"),
  password: z.string().min(1, "A Senha é obrigatória"),
})


type FormData = z.infer<typeof schema>

const Login = (): React.JSX.Element => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        router.push("/dashboard", { scroll: true })

      })
      .catch((error): any => {
        console.error("Erro ao logar", error)
      })

  }

  useEffect(() => {
    async function handleLogout(): Promise<void> {
      await signOut(auth)
    }
    handleLogout()
  }, [])

  return (
      <div className='flex justify-center items-center w-full min-h-screen gap-5 flex-col bg-black'>
        <Metadata seoTitle='carStore | Login' seoDescription='carStore - Página de Login'/>
        <Link href={"/"} className='max-w-sm w-full text-center'>
          <Logo />
        </Link>

        <p className='mb-5 text-white text-xl'>Espaço revervado apenas para administradores</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white drop-shadow max-w-xl w-full rounded-lg p-4'>

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
          <button type='submit' className='bg-zinc-900 w-full rounded-md h-10 font-medium text-white'>Entrar</button>
        </form>
          <p className='text-white text-lg'>Não tem uma conta? seu lugar pode ser <Link className='text-red-600 font-bold uppercase' href={"/"}>Aqui</Link></p>
      </div>
  )
}

export default Login