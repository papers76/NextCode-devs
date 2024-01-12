"use client"
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("White");

  const handleNav = () => {
    setNav(!nav);
  };


  useEffect(()=> {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#000000');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    }
    window.addEventListener('scroll',changeColor )
  },[]);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 z-10 w-full duration-300 ease-in"
    >
      <div className="max-width-[1240px] m-auto flex  justify-between items-center p-4  text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
            NextCode
          </h1>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
          <li className="p-4">
            <Link href="#home">Inicio</Link>
          </li>
          <li className="p-4">
            <Link href="#servicios">Servicios</Link>
          </li>
          <li className="p-4">
            <Link href="#nosotros">Nosotros</Link>
          </li>
          <li className="p-4">
            <Link href="#Proyectos">Proyectos</Link>
          </li>
          <li className="p-4">
            <Link href="#contactos">Contactos</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="z-10 block sm:hidden">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Button */}
        <div
          className={
            nav
              ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
              : "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden "
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="#home">Inicio</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="#servicios">Servicios</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="#nosotros">Nosotros</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="#proyectos">Proyectos</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="#contactos">Contactos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default NavBar;