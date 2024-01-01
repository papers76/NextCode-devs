"use client"; // This is a client components
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='font-semibold text-white bg-black'>
      <div className='container flex items-center justify-between mx-auto h-36 sm:h-12'>
        <div className='flex content-center text-white item-center'>Logo</div>

        <ul className={` flex-col sm:flex sm:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className='m-0 mx-4 transition-all duration-300 hover:bg-zinc-500 hover:rounded-lg'>
            <Link className='flex content-center item-center' href='#section-1'>INICIO</Link>
          </li>
          <li className='mx-4 hover:bg-zinc-500 hover:rounded-lg'>
            <Link href='#section-2'>SERVICIOS</Link>
          </li>
          <li className='mx-4 hover:bg-zinc-500 hover:rounded-lg'>
            <Link href='#section-3'>NOSOTROS</Link>
          </li>
          <li className='mx-4 hover:bg-zinc-500 hover:rounded-lg'>
            <Link href='#section-4'>PROYECTOS</Link>
          </li>
          <li className='mx-4 hover:bg-zinc-500 hover:rounded-lg'>
            <Link href='#section-5'>CONTACTO</Link>
          </li>
        </ul>

        <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isMenuOpen ? (
              /* Si el menú está abierto, muestra la X */
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            ) : (
              /* Si el menú está cerrado, muestra las tres rayas */
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            )}
          </button>
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;