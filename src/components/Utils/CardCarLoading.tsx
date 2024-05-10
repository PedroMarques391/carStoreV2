import React from 'react'

const CardLoading = (): React.JSX.Element => {
  return (
    <section className='w-full bg-white rounded-lg group overflow-hidden'>
      <div className='w-full rounded-lg h-60 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-load' />
      <div className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-5 mt-2 w-1/2 ml-2 rounded-e-lg animate-load' />
      <div className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-5 mt-4 mb-8 w-2/3 ml-2 rounded-e-lg animate-load' />
      <div className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-5 mt-2 w-1/3 ml-2 rounded-e-lg animate-load' />
      <div className='w-full flex justify-between mt-2'>
        <div className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-5 w-1/2 mx-2 rounded-e-lg animate-load' />
        <div className='bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 h-5 w-1/2 mx-2 rounded-s-lg animate-load mb-2' />
      </div>
    </section>
  )
}

export default CardLoading