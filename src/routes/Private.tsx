"use client"
import CardLoading from '@/components/Utils/CardCarLoading'
import { useAuth } from '@/hooks/useAuth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface IPrivateProps {
    children: ReactNode
}

const Private = ({ children }: IPrivateProps): any => {

    const { loadingAuth, signed } = useAuth()
    function renderShadows(): JSX.Element[] {
        const shadows = Array.from({ length: 6 }, (_, index) => (
          <CardLoading key={index} />
        ));
        return shadows;
      }

    if (loadingAuth) {
        return (
            <div className='w-full max-w-7xl mx-auto px-5'>

                <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {renderShadows()}
                </main>

            </div>
        )
    }

    if (!signed) {
        return redirect("/login")
    }

    return children
}

export default Private