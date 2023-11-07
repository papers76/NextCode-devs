
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='bg-zinc-400 text-black font-semibold '>
      <ul className='flex flex-col sm:flex sm:flex-row ' >
        <li  className='mx-4'> 
          <Link href="#section-1">
            INICIO
          </Link>
        </li>
        <li  className='mx-4'>
          <Link href="#section-2">
            SERVICIOS
          </Link>
        </li>
        <li  className='mx-4'>
          <Link href="#section-3">
            NOSOTROS
          </Link>
        </li>
        <li  className='mx-4'>
          <Link href="#section-4">
            PROYECTOS
          </Link>
        </li>
        <li  className='mx-4'>
          <Link href="#section-5">
            CONTACTANOS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
