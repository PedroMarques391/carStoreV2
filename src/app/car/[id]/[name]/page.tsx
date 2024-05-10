"use client"
import { useParams } from 'next/navigation'

const CarDetails = (): React.JSX.Element => {
  const params = useParams()
  console.log(params);
  return (
    <div>carro de numero: {params.id}</div>
  )
}

export default CarDetails