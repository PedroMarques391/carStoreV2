"use client"
import Container from '@/components/Container/Container'
import Category from '@/components/Utils/Category'
import Links from '@/components/Utils/Link'
import Metadata from '@/components/Utils/Metadata'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'



const NotFound = (): React.JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/notFound")
    }, [router])

    return (
        <section className='bg-black h-auto sm:h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-white max-w-6xl px-4 sm:px-6 lg:px-8 py-12'>
                <Metadata seoTitle='Página Não Encontrada' seoDescription='Not found' />
                <h1 className='text-8xl font-bold text-red-600 mb-4'>404</h1>
                <p className='text-2xl font-bold mb-4'>Ops! Algo deu errado.</p>
                <p className='text-lg text-gray-400 mb-8'>{"Juro que tentei, mas não encontrei essa página... :("}</p>
                <p className='text-lg mb-8'>Mas não se preocupe, separamos algumas recomendações para você:</p>
                <Links 
                className='bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300'
                animation={false}
                href='/'>
                        Voltar para a página inicial  
                </Links>

                <h2 className='font-bold mt-16 mb-8 text-2xl text-gray-200'>Categorias Populares</h2>
                <section className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                    <Category category='sedan' imagePath='/category/sedan.png'>Sedans</Category>
                    <Category category='hatch' imagePath='/category/hatch.png'>Hatches</Category>
                    <Category category='suv' imagePath='/category/suv.png'>SUVs</Category>
                    <Category category='picape' imagePath='/category/picape.png'>Picapes</Category>
                </section>
            </div>
        </section>
    )
}

export default NotFound