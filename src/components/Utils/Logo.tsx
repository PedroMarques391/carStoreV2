import React from 'react'

interface ILogoProps {
  className?: string
}

const Logo = ({className}: ILogoProps): React.JSX.Element => {
  return (
    <header>
        <div className='text-2xl font-bold tracking-widest italic text-red-600'>car<span className='text-3xl text-white'>Store</span></div>
    </header>
  )
}

export default Logo