import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ILinkProps {
    href: string
    children: ReactNode
    className?: string
    animation?: boolean
    target?: string
}

const Links = ({ href, children, className, animation=true, target="_top" }: ILinkProps): React.JSX.Element => {
    const pathName = usePathname()
    const isCurrentPath = pathName === href

    return (
        <div className={`${className} flex items-baseline group`}>
            <Link
            replace
            className='p-2'
            target={target}
            href={href}>
                {children}
                <p className={`group-hover:animate-lines mt-0.5 h-0.5 bg-red-700 ${isCurrentPath ? "w-full" : "w-0"} ${!animation && "hidden"}`} />
            </Link>
        </div>
    )
}

export default Links