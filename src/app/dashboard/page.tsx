"use client"
import Container from '@/components/Container/Container'
import DashboardHeader from '@/components/PanelHeader/PanelHeader'
import { IconTrash } from '@/components/Utils/Icons'
import Metadata from '@/components/Utils/Metadata'
import { useAuth } from '@/hooks/useAuth'
import { useCar } from '@/hooks/useCar'
import Private from '@/routes/Private'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Dashboard = (): React.JSX.Element => {
  const { userCars: cars, handleDeleteCar, loadUserCars } = useCar()
  const { user } = useAuth()

  useEffect(() => {
    loadUserCars()
  }, [user])

  return (
    <Private>
      <Container>
        <DashboardHeader />
        <Metadata
              seoTitle="carStore | Seu Dashboard"
              seoDescription={`carStore - dashboard do usuário`} />
        <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {cars.map((car) => (
            <section key={car.id} className='w-full rounded-lg relative bg-white'>
              <button
                onClick={() => handleDeleteCar(car)}
                className='absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow-lg'>{IconTrash}</button>
              <Image
                height={600}
                width={600}
                priority
                className='w-full rounded-lg min-h-72 max-h-72 transition-all duration-300'
                src={car.images[0].url} alt="carro" />
              <p className='font-bold mt-1 px-2 mb-2'>{car.name}</p>
              <div className="flex flex-col px-2">
                <span className="text-zinc-700">
                  Ano {car.year} | {car.km} KM
                </span>
                <strong className="text-black font-bold mt-4">
                  R$ {car.price}
                </strong>
              </div>
              <div className="w-full h-px bg-slate-200 my-2" />
              <div className="px-2 pb-2">
                <span className="text-bold">
                  {car.city}
                </span>
              </div>
            </section>
          ))}
        </main>
      </Container>
    </Private>
  )
}

export default Dashboard