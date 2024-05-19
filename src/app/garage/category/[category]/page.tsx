"use client";

import Container from "@/components/Container/Container";
import CarCard from "@/components/Utils/CarCard";
import CardLoading from "@/components/Utils/CardCarLoading";
import Metadata from "@/components/Utils/Metadata";
import { useCar } from "@/hooks/useCar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Category = (): React.JSX.Element => {
  const { category } = useParams<{ category: string }>();
  const { searchCarsByCategory, searchResults: cars } = useCar();
  const [loading, setLoading] = useState<boolean>(true);

  function renderShadows(): JSX.Element[] {
    const shadows = Array.from({ length: 6 }, (_, index) => (
      <CardLoading key={index} />
    ));
    return shadows;
  }

  useEffect(() => {
    const fetchData = async () => {
      await searchCarsByCategory(category);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <Container>
      {loading ? (
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>
          {renderShadows()}
        </section>
      ) : (
        <>
        <Metadata 
        seoTitle={`carStore | ${category}s`} 
        seoDescription={`carStore - estoque de ${category}s`} />
          <h1 className='font-bold mt-4 text-2xl text-black/50'>
            Mostrando <span className="text-red-600/80">{category}s</span>
          </h1>
          <p className="text-black/80 mb-4">{cars.length} encontrados!</p>
          <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <CarCard cars={cars} size={100} />
          </main>
        </>
      )}
    </Container>
  );
}

export default Category;
