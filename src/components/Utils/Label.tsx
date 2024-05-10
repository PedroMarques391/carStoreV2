import {ReactNode} from 'react'

interface ILabelProps {
    children: ReactNode
}

const Label = ({children}: ILabelProps) => {
  return (
    <p className='mb-3 font-bold tracking-widest'>{children}</p>
  )
}

export default Label