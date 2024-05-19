import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'


interface IInputProps {
    type: string
    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    className?: string
}

const Input = ({name, placeholder, type, register, error, rules, className}: IInputProps): React.JSX.Element => {
  return (
    <div>
        <input 
        className={`${className} w-full border-2 rounded-md h-11 px-2 outline-none placeholder:capitalize`}
        {...register(name, rules)} 
        id={name}
        placeholder={placeholder}
        type={type} 
        />
        {error && <p className='my-2 text-red-600'>{error}</p>}
    </div>
  )
}

export default Input