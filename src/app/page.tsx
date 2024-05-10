"use client"
import Container from '@/components/Container/Container'
import CardLoading from '@/components/Utils/CardCarLoading'
import Links from '@/components/Utils/Link'
import { useAuth } from '@/hooks/useAuth'
import { useCar } from '@/hooks/useCar'
import Image from 'next/image'



const Home = (): React.JSX.Element => {
  const { loadingAuth } = useAuth()
  const { allCars: cars } = useCar()

  function renderShadows(): JSX.Element[] {
    const shadows = Array.from({ length: 6 }, (_, index) => (
      <CardLoading key={index} />
    ));
    return shadows;
  }

  return (
    <Container>
      <section className='p-4 mt-6 w-full max-w-3xl bg-white flex justify-center items-center mx-auto gap-2'>
        <input
          className='w-full border-2 rounded-lg h-9 px-3 outline-none'
          type="text"
          placeholder='Digite o nome do carro' />
        <button
          className='bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg'>
          Pesquisar
        </button>
      </section>

      <h1 className='font-bold text-center mt-6 mb-4 text-2xl'>Carros novos e usados em todo o <span className='text-red-600'>Brasil</span></h1>

      <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {!loadingAuth ? (
          cars.map((car) => (
            <section
              key={car.id}
              className='w-full bg-white rounded-lg group overflow-hidden'>
              <Image
                height={600}
                width={600}
                priority
                className='w-full rounded-lg max-h-72 group-hover:scale-105 transition-all duration-300'
                src={car.images[1].url} alt="carro" />
              <p className='font-bold my-2 px-2'>{car.name}</p>
              <div className='flex flex-col px-2'>
                <span className='text-zinc-700 mb-6'>{car.year} | {car.km} KM</span>
                <strong className='text-black font-medium text-xl'>R$ {car.price}</strong>
              </div>
              <div className='w-full h-px bg-slate-200 my-2'></div>
              <div className='flex justify-between mx-5'>
                <div className='px-2 pb-2 text-zinc-700'>{car.city}</div>
                <button>
                  <Links className="px-2 pb-2 text-zinc-700" animation={false} href={`/car/${car.id}/${car.name}`}>Detalhes</Links>
                </button>
              </div>
            </section>
          ))
        ) : (
          renderShadows()
        )}
      </main>
    </Container>


  )
}

export default Home