"use client"
import { db, storage } from "@/data/firebase.config";
import { useAuth } from "@/hooks/useAuth";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useState } from "react";



interface ICarProvider {
    children: ReactNode
}

export interface ICarsProps {
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
    uid: string
    url: string
}

type CarContextDataType = {
    allCars: ICarsProps[]
    userCars: ICarsProps[]
    searchResults: ICarsProps[]
    order: string
    handleDeleteCar: (id: ICarsProps) => Promise<void>
    loadAllCars: () => void
    loadUserCars: () => void
    changeOrder: () => void
    searchCars: (input: string) => void
    searchCarsByCategory: (input: string) => void

}


export const CarContext = createContext({} as CarContextDataType)

const CarProvider = ({ children }: ICarProvider) => {
    const [allCars, setAllCars] = useState<ICarsProps[]>([])
    const [userCars, setUserCars] = useState<ICarsProps[]>([])
    const [searchResults, setSearchResults] = useState<ICarsProps[]>([])
    const [order, setOrder] = useState<"asc" | "desc">("desc")
    const path = usePathname()
    const { user } = useAuth()

    function changeOrder(): void {
        const currentOrder = order === "desc" ? "asc" : "desc"
        setOrder(currentOrder)
    }

    function loadAllCars() {
        const carsRef = collection(db, "cars")
        const queryRef = path === "/garage" 
        ? query(carsRef, orderBy("created", order))
        : query(carsRef, orderBy("created", "desc"))
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

    async function searchCars(input: string) {
        setSearchResults([])
        const q = query(collection(db, "cars"),
            where("name", ">=", input),
            where("name", "<=", input + "\uf8ff"),
        )
        const querySnapshot = await getDocs(q)

        let listCars = [] as ICarsProps[]

        querySnapshot.forEach((car) => {
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
        setSearchResults(listCars)
    }

    async function searchCarsByCategory(input: string) {
        setSearchResults([])
        const q = query(collection(db, "cars"),
            where("type", ">=", input),
            where("type", "<=", input + "\uf8ff"),
        )
        const querySnapshot = await getDocs(q)

        let listCars = [] as ICarsProps[]

        querySnapshot.forEach((car) => {
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
        setSearchResults(listCars)
    }

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
            })
            .catch(() => console.log("Erro ao buscar dados")
            )
    }

    const handleDeleteCar = async (car: ICarsProps): Promise<void> => {
        const itemCar = car
        const docRef = doc(db, "cars", itemCar.id)
        await deleteDoc(docRef)

        itemCar.images.map(async (image) => {
            const imagePath = `images/${image.uid}/${image.name}`
            const imageRef = ref(storage, imagePath)
            console.log(image);

            try {
                await deleteObject(imageRef)
                setUserCars(userCars.filter(car => car.id !== itemCar.id))
            } catch (error) {
                console.error("Erro ao excluir", error);
            }
        })
    }

    return (
        <CarContext.Provider value={{
            allCars,
            userCars,
            searchResults,
            order,
            handleDeleteCar,
            loadAllCars,
            loadUserCars,
            searchCars,
            changeOrder,
            searchCarsByCategory,
        }}>
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider