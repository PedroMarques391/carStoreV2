"use client"
import Container from '@/components/Container/Container'
import SearchInput from '@/components/Input/SearchInput'
import CarCard from '@/components/Utils/CarCard'
import CardLoading from '@/components/Utils/CardCarLoading'
import Category from '@/components/Utils/Category'
import { useCar } from '@/hooks/useCar'
import { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (): React.JSX.Element => {
  const { allCars: cars, loadAllCars } = useCar()
  const [loading, setLoading] = useState<boolean>(true);

  function renderShadows(): JSX.Element[] {
    const shadows = Array.from({ length: 6 }, (_, index) => (
      <CardLoading key={index} />
    ));
    return shadows;
  }

  useEffect(() => {
    const fetchData = async () => {
      toast.success('Seja Bem vindo!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      
      await loadAllCars();
      setLoading(false);
    };
    fetchData();
  }, [])

  return (
    <>
      <div className='bg-carStoreMobile lg:bg-carStore bg-cover w-full h-60 md:h-96' />
      <Container>
        <SearchInput/>

        <h1 className='font-bold mt-6 mb-4 text-xl text-black/50'>Categorias</h1>
        <ToastContainer/>

        <section className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          <Category category='sedan' imagePath='/category/sedan.png'>Sedans</Category>
          <Category category='hatch' imagePath='/category/hatch.png'>Hatches</Category>
          <Category category='suv' imagePath='/category/suv.png'>SUVs</Category>
          <Category category='picape' imagePath='/category/picape.png'>Picaps</Category>
        </section>

        {loading ? (
          <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {renderShadows()}
          </main>
        ) : (
          <>
            <h1 className='font-bold mb-4 mt-4 text-2xl text-black/50'>Últimos Veículos Publicados</h1>
            <main className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <CarCard cars={cars} size={6} />
            </main></>
        )}
      </Container>
    </>

  )
}

export default Home