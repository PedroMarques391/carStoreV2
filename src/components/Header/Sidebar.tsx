import { useAuth } from '@/hooks/useAuth'
import Links from '../Utils/Link'
import { IconBars, IconClose, IconLogin, IconUser } from '../Utils/Icons'
import Link from 'next/link'

interface ISidebarProps {
    handleClick: () => void
}

const Sidebar = ({ handleClick }: ISidebarProps): React.JSX.Element => {
    const { signed, loadingAuth } = useAuth()

    return (
        <aside className='flex flex-col w-full h-screen bg-black sm:hidden z-40'>
            <button
                onClick={handleClick}
                className='flex justify-end pt-4 pr-7'>
                {IconClose}
            </button>
            <ul className='flex flex-col justify-center items-center gap-y-5'>
                <Links href='/' className='text-white text-xl w-full p-5'>
                    Início
                </Links>

                <Links href='/garage' className='text-white text-xl w-full p-5'>
                    Garagem
                </Links>

                <Links href='/info/about' className='text-white text-xl w-full p-5'>
                    Sobre
                </Links>
            </ul>

            <div className='my-5 flex justify-start p-5 sm:justify-center sm:p-0 items-center'>
                {!loadingAuth && signed && (
                    <Link href={"/dashboard"}>
                        {IconLogin}
                    </Link>
                )}

                {!loadingAuth && !signed && (
                    <Link href={"/login"}>
                        {IconUser}
                    </Link>
                )}
            </div>
        </aside>
    )
}

export default Sidebar