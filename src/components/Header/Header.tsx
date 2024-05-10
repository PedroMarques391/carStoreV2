"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../Utils/Logo'
import { IconLogin, IconUser } from '../Utils/Icons'
import { useAuth } from '@/hooks/useAuth'



const Header = (): React.JSX.Element => {
  const { signed, loadingAuth } = useAuth()
  const pathName = usePathname()
  const hidden = pathName === "/login" || pathName === "/register"

  return (
    <header className={`${hidden ? "hidden" : "flex items-center justify-center h-16 drop-shadow bg-white mb-4"}`}>
      <header className='flex w-full items-center justify-between max-w-7xl px-5 mx-auto'>
        <Link href={"/"}>
          <Logo />
        </Link>

        {!loadingAuth && signed && (
          <Link href={"/dashboard"}>
            {IconUser}
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link href={"/login"}>
            {IconLogin}
          </Link>
        )}

      </header>
    </header>
  )
}

export default Header