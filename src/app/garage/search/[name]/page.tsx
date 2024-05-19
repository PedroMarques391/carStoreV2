"use client"
import { useCar } from '@/hooks/useCar'
import { useParams } from 'next/navigation'
import Container from '@/components/Container/Container'
import React, { useEffect, useState } from 'react'
import CarCard from '@/components/Utils/CarCard'
import SearchInput from '@/components/Input/SearchInput'
import { IconArrowLeft } from '@/components/Utils/Icons'
import Link from 'next/link'
import Category from '@/components/Utils/Category'
import Metadata from '@/components/Utils/Metadata'
import CardLoading from '@/components/Utils/CardCarLoading'

const SearchPage = () => {
  const { searchCars, searchResults: cars } = useCar()
  const [loading, setLoading] = useState<boolean>(true)
  const { name } = useParams<{ name: string }>()

  const decodeQuery = decodeURIComponent(name)

  useEffect(() => {
    const fetchData = async () => {
      await searchCars(decodeQuery)
      setLoading(false)
    }
    fetchData()
  }, [name])

  function renderShadows(): JSX.Element[] {
    const shadows = Array.from({ length: 6 }, (_, index) => (
      <CardLoading key={index} />
    ));
    return shadows;
  }

  if (loading) {
    return (
      <Container>
        <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {renderShadows()}
        </main>
      </Container>
    )
  }

  return (
    <Container>
      {cars.length > 0 ? (
        <>
          <Metadata
            seoTitle={`carStore | ${name}`}
            seoDescription={`carStore - Mostrando estoques de ${decodeQuery}`}
          />
          <section className='flex flex-col justify-center items-center relative'>
            <div className='absolute top-3 sm:top-10 left-0 flex justify-center items-center group'>
              <Link href={"/garage"}>{IconArrowLeft}</Link>
              <p className='absolute top-2 left-10 w-36 sm:top-10 sm:left-0 sm:w-auto font-sans leading-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Ir para a garagem</p>
            </div>
            <p className='text-center mt-14 sm:mt-10 text-2xl tracking-widest'>
              Exibindo resultados para <span className='text-red-600 font-bold'>{`"${decodeQuery}"`}</span>
            </p>
            <p className='text-center mb-10 font-bold text-black/50'>{cars.length} carros encontrados</p>
            <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <CarCard cars={cars} size={100} />
            </main>
          </section>

        </>
      ) : (
        <>
          <Metadata
            seoTitle="carStore | Sem resultados"
            seoDescription={`carStore - Resultados de pesquisa`} />
          <section className='flex flex-col gap-4 justify-center items-center relative'>
            <div className='absolute top-10 left-0 flex justify-center items-center group'>
              <Link href={"/garage"}>{IconArrowLeft}</Link>
              <p className='absolute top-2 left-10 w-36 sm:top-10 sm:left-0 sm:w-auto font-sans leading-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Ir para a garagem</p>
            </div>
            <p className='text-center mt-20 sm:mt-10 text-2xl tracking-widest w-full'>
              Poxa, não encontrei resultados para <span className='text-red-600 font-bold'>{`"${decodeQuery}"`}</span>
            </p>
            <p className='text-black/60'>Tente ajustar sua pesquisa ou explore novas opções.</p>
            <SearchInput />

            <h1 className='font-bold mt-6 mb-4 text-xl text-black/50'>Explore também</h1>
            <section className='grid grid-cols-2 gap-6 md:grid-cols-4'>
              <Category category='sedan' imagePath='/category/sedan.png'>Sedans</Category>
              <Category category='hatch' imagePath='/category/hatch.png'>Hatches</Category>
              <Category category='suv' imagePath='/category/suv.png'>SUVs</Category>
              <Category category='picape' imagePath='/category/picape.png'>Picaps</Category>
            </section>
          </section>
        </>
      )}
    </Container>
  )
}

export default SearchPage
