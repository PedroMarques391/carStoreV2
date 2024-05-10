import { ReactNode } from "react"

interface IContainerProps {
    children: ReactNode
}

const Container = ({ children }: IContainerProps): React.JSX.Element => {
    return (
        <main className='w-full max-w-7xl mx-auto px-5'>
            {children}
        </main>
    )
}

export default Container