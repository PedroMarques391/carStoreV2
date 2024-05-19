"use client"
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import { IconSearch } from '../Utils/Icons'

const SearchInput = (): React.JSX.Element => {
    const [query, setQuery] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const router = useRouter()

    const showError = (timeInSeconds: number = 5): void => {
        setError(true)
        setTimeout(() => {setError(false) }, timeInSeconds * 1000)
    }
    
  const handleSearchCar = () => {
    if(!query) {
        return showError()
    }
    router.push(`/garage/search/${query.toUpperCase()}`)
  }
  return (
    <section className='p-4 mt-6 w-full max-w-3xl bg-white flex justify-center items-center mx-auto gap-2'>
          <input
            value={query}
            name='input'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            className={`${error && "border-red-600 placeholder:text-red-600"} w-full border-2 rounded-lg h-9 px-3 outline-none`}
            type="text"
            placeholder={`${error ? "O campo não pode ficar vazio" : "Digite o nome do carro"}`} />
          <button
            type='submit'
            onClick={handleSearchCar}
            className='bg-red-600 h-9 px-8 rounded-lg text-white font-medium text-lg transition-all duration-500 hover:bg-red-700'>
            <p className='hidden md:block'>Pesquisar</p>
            <p className='block md:hidden'>{IconSearch}</p>
          </button>
        </section>
  )
}

export default SearchInput