"use client"
import { db } from "@/data/firebase.config";
import { useAuth } from "@/hooks/useAuth";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { ReactNode, createContext, useEffect, useState } from "react";



interface ICarProvider {
    children: ReactNode
}

interface ICarsProps {
    id: string
    name: string
    year: string
    uid: string
    price: string | number
    city: string
    km: string
    description: string
    images: ICarImagesProps[]
}

interface ICarImagesProps {
    name: string
    uuid: string
    url: string
}

type CarContextDataType = {
    allCars: ICarsProps[]
    userCars: ICarsProps[]
}


export const CarContext = createContext({} as CarContextDataType)

const CarProvider = ({ children }: ICarProvider) => {
    const [allCars, setAllCars] = useState<ICarsProps[]>([])
    const [userCars, setUserCars] = useState<ICarsProps[]>([])
    const { user } = useAuth()


    useEffect(() => {
        function loadAllCars() {
            const carsRef = collection(db, "cars")
            const queryRef = query(carsRef, orderBy("created", 'desc'))
            getDocs(queryRef)
                .then((snapshot) => {
                    let listCars = [] as ICarsProps[]

                    snapshot.forEach((car) => {
                        listCars.push({
                            id: car.id,
                            name: car.data().name,
                            year: car.data().year,
                            km: car.data().km,
                            description: car.data().description,
                            city: car.data().city,
                            price: car.data().price,
                            uid: car.data().uuid,
                            images: car.data().images
                        })
                    })
                    setAllCars(listCars)
                })
                .catch(() => console.log("Erro ao buscar dados")
                )
        }
        loadAllCars()
    }, [])

    useEffect(() => {
        function loadUserCars() {
            if (!user?.uid) {
                return;
            }

            const carsRef = collection(db, "cars")
            const queryRef = query(carsRef, where("uuid", "==", user.uid))
            
            
            getDocs(queryRef)
                .then((snapshot) => {
                    let listCars = [] as ICarsProps[]

                    snapshot.forEach((car) => {
                        listCars.push({
                            id: car.id,
                            name: car.data().name,
                            year: car.data().year,
                            km: car.data().km,
                            description: car.data().description,
                            city: car.data().city,
                            price: car.data().price,
                            uid: car.data().uuid,
                            images: car.data().images
                        })
                    })
                    setUserCars(listCars)
                    console.log(listCars);
                })
                .catch(() => console.log("Erro ao buscar dados")
                )
        }
        loadUserCars()
    }, [user])
    
    return (
        <CarContext.Provider value={{ allCars, userCars }}>
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider