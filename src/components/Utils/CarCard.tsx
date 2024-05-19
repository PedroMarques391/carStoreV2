"use client"
import React, { useEffect, useState } from 'react'
import Links from './Link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { ICarsProps } from '@/context/CarContext';

interface ICarsCardProps {
    cars: ICarsProps[]
    size: number
}

const CarCard = ({ cars, size }: ICarsCardProps): React.JSX.Element => {
    const [sliderPerView] = useState<number>(1)
    return (
        <>
            {cars.slice(0, size).map((car) => (
                    <section
                        key={car.id}
                        className='w-full bg-white rounded-lg group overflow-hidden'>

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={sliderPerView}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            {car.images.map(image => (
                                <SwiperSlide key={image.name}>
                                    <Image
                                        height={1000}
                                        width={1000}
                                        priority
                                        className='w-full cursor-grabbing rounded-lg min-h-72 max-h-72 group-hover:scale-105 transition-all duration-300 object-cover'
                                        src={image.url} alt="carro" />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <p className='font-bold my-2 px-2'>{car.name}</p>
                        <div className='flex flex-col px-2'>
                            <span className='text-zinc-700 mb-6'>{car.year} | {car.km} KM</span>
                            <strong className='text-black font-medium text-xl'>R$ {car.price}</strong>
                        </div>
                        <div className='w-full h-px bg-slate-200 my-2'></div>
                        <div className='flex justify-between mx-5'>
                            <div className='px-2 pb-2 text-zinc-700'>{car.city}</div>
                            <button>
                                <Links className="px-2 pb-2 text-zinc-700 transition-all duration-700" animation={false} href={`/car/${car.id}/${car.name}`}>Detalhes</Links>
                            </button>
                        </div>
                    </section>
                ))}
        </>
    )
}

export default CarCard