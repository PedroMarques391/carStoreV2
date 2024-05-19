"use client"
import Container from '@/components/Container/Container'
import CarCard from '@/components/Utils/CarCard'
import CardLoading from '@/components/Utils/CardCarLoading'
import { IconChangeOrder } from '@/components/Utils/Icons'
import Metadata from '@/components/Utils/Metadata'
import { useCar } from '@/hooks/useCar'
import React, { useEffect, useState } from 'react'

const Garage = (): React.JSX.Element => {
    const { allCars: cars, loadAllCars, changeOrder, order } = useCar()
    const [loading, setLoading] = useState<boolean>(true)

    function renderShadows(): JSX.Element[] {
        const shadows = Array.from({ length: 6 }, (_, index) => (
            <CardLoading key={index} />
        ));
        return shadows;
    }

    useEffect(() => {
        const fetchData = async () => {
            await loadAllCars()
            setLoading(false)
        }
        fetchData()
    }, [order])

    return (
        <>
            <Metadata seoTitle='carStore | Garagem' seoDescription='carStore - Página de estoque' />
            <div className='bg-carStoreGarageMobile md:bg-carStoreGarage bg-cover w-full h-60 sm:h-[400px] ' />
            <Container>
                <section className='relative'>
                    <h1 className='my-10 text-xl sm:text-2xl font-bold text-center'>
                        Veja todos os veículos que temos na <span className='text-red-600'>Garagem</span>
                    </h1>
                    <div className='flex gap-2 justify-center items-center group z-40 absolute top-10 right-1 sm:top-1'>
                        <p className='hidden sm:block text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-150'>{order === "asc" ? "Mais recentes" : "Mais Antigos"}</p>
                        <button
                            className=''
                            onClick={changeOrder}
                            aria-label="Mudar ordem dos veículos"
                        >
                            {IconChangeOrder}
                        </button>
                    </div>
                </section>

                {loading ? (
                    <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                        {renderShadows()}
                    </main>

                ) : (
                    <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                        <CarCard cars={cars} size={100} />
                    </main>
                )}
            </Container>
        </>
    )
}

export default Garage