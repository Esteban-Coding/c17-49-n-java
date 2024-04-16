'use client'
import Image from 'next/image';
import { ImagenAvatar } from './ImagenAvatar';
import Link from 'next/link';
import { BotonPrincipal } from './BotonPrincipal';
import { CalendarDaysIcon, DevicePhoneMobileIcon, UserCircleIcon, DocumentTextIcon, Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Reserva de turnos', href: '#', icon: CalendarDaysIcon },
    { name: 'Mis consultas', href: '#', icon: DocumentTextIcon },
    { name: 'Perfil', href: '#', icon: UserCircleIcon },
    { name: 'Atención virtual', href: '#', icon: DevicePhoneMobileIcon },
];

export const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <>
            <div className={`fixed shadow-2xl rounded-xl w-[332px] bg-white  p-2 ml-6 -mt-64 items-center justify-end hidden md:flex`}>
                <button onClick={toggleNavbar}><Bars3Icon className={`w-6 hover:text-white rounded hover:bg-mlt-600 transition-colors duration-300 ${isNavbarVisible ? "hidden" : ""}`} /></button>
                <button onClick={toggleNavbar}><XMarkIcon className={`w-6 hover:text-white rounded hover:bg-mlt-600 transition-colors duration-300 ${isNavbarVisible ? "" : "hidden "}`} /></button>
            </div >
            <section className={`fixed flex-col rounded-xl w-[300px] h-[500px] mr-10 overflow-hidden hidden p-4 ml-6 -mt-52 bg-white shadow-2xl box-content md:flex transition-transform duration-500 transform 
            ${isNavbarVisible ? 'translate-x-0' : '-translate-x-96 fixed'}`}>
                <header>
                    <Image
                        src='/Medilatam.svg'
                        alt="logo de la aplicación web"
                        height={150}
                        width={500}
                    />
                </header>
                <div className="flex flex-col space-y-2 items-center mt-4">
                    <ImagenAvatar imagen={'/imageProfile/avatar.png'} width={130} height={130} />
                    <div className="flex space-x-10 pb-4  border-b-2">
                        <BotonPrincipal name={"Login"} />
                        <BotonPrincipal name={"Registro"} />
                    </div>
                </div>
                <nav className="flex flex-col space-x-0 -space-y-2 w-full mt-2">
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex h-[48px] grow items-center justify-start gap-2 rounded-md px-2 text-sm font-medium hover:bg-mlt-600 group hover:text-white"
                            >
                                <LinkIcon className="w-6" />
                                <p>{link.name}</p>
                            </Link >
                        );
                    })}
                </nav >
            </section >
        </>

    )
}