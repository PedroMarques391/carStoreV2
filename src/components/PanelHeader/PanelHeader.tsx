"use client"
import { auth } from '@/data/firebase.config'
import { signOut } from 'firebase/auth'
import React from 'react'
import Links from '../Utils/Link'

const DashboardHeader = (): React.JSX.Element => {
    async function handleLogout() {
        await signOut(auth)
    }

    return (
        <section className='w-full flex items-center justify-center h-12 bg-black text-white gap-4 px-4 rounded-lg my-4 text-sm sm:text-base'>
            <Links href='/dashboard'>Dashboard</Links>
            <Links href='/dashboard/new'>Cadastrar Carro</Links>


            <button className='ml-auto' onClick={handleLogout}>Sair da conta</button>
        </section>
    )
}

export default DashboardHeader