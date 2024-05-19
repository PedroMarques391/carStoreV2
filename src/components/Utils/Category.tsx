import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ICategoryProps {
    children: ReactNode
    category: string
    imagePath: string
}

const Category = ({ category, imagePath, children }: ICategoryProps): React.JSX.Element => {
    return (
        <Link
            className='relative md:mb-10'
            href={`/garage/category/${category}`}
        >
            <Image
                alt={`search for ${category}`}
                src={imagePath}
                width={600}
                height={600}
                priority
                className='rounded-xl w-full h-32 lg:h-60 object-cover'
            />
            <p className='absolute bottom-4 w-full text-2xl font-bold text-white bg-black bg-opacity-50 text-center p-2'>
                {children}
            </p>
        </Link>
    )
}

export default Category