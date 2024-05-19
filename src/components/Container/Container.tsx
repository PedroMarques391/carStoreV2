import { ReactNode, useEffect, useState } from "react"
import { IconToTop } from "../Utils/Icons"
import Link from "next/link"

interface IContainerProps {
    children: ReactNode
}

const Container = ({ children }: IContainerProps): React.JSX.Element => {
    const [onScroll, setOnScroll] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setOnScroll(window.scrollY > 150)
        }
        return window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <main className='w-full max-w-7xl mx-auto px-5'>
            {children}
            <Link href="#top" className={`fixed flex justify-center items-center w-12 h-12 bg-black/40 bottom-10 right-10 z-40 transition-opacity duration-700 rounded-xl ${!onScroll ? "opacity-0" : "opacity-100"}`}>
                {IconToTop}
            </Link>
        </main>
    )
}

export default Container