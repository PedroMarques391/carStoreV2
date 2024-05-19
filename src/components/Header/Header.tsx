"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Logo from '../Utils/Logo';
import { IconBars, IconLogin, IconUser } from '../Utils/Icons';
import { useAuth } from '@/hooks/useAuth';
import Links from '../Utils/Link';
import Sidebar from './Sidebar';

const Header = (): React.JSX.Element => {
  const { signed, loadingAuth } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const hidden = pathName === "/login" || pathName === "/notFound";

  const [onScroll, setOnScroll] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setOnScroll(window.scrollY > 150)
        }
        return window.addEventListener("scroll", handleScroll)
    }, [])

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${hidden ? "hidden" : "sticky top-0 left-0 right-0 z-20 bg-black h-16 drop-shadow flex items-center justify-center"} ${onScroll && "shadow-sm shadow-red-600 transition-shadow duration-500"}`}>
      <nav className={`block sm:hidden fixed top-0 transition-all w-1/2 duration-1000 z-30 ${!isOpen ? "-right-96" : "right-0"}`}>
        <Sidebar handleClick={handleClick} />
      </nav>
      <section className='flex w-full items-center justify-between max-w-7xl px-5 mx-auto'>
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className='hidden sm:flex w-full justify-end gap-20 items-center'>
          <ul className='flex justify-center items-center gap-x-10'>
            <Links href='/' className='text-white text-lg'>
              Início
            </Links>

            <Links href='/garage' className='text-white text-lg'>
              Garagem
            </Links>

            <Links href='/info/about' className='text-white text-lg'>
              Sobre
            </Links>
          </ul>

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
        </div>

        <button
          onClick={handleClick}
          className='flex sm:hidden'>
          {IconBars}
        </button>

      </section>
    </header>
  );
};

export default Header;
