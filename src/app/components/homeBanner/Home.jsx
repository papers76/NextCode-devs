import React from 'react';
import classNames from 'classnames';
import styles from './Home.module.css';

function Home() {
  return (
    <div
      className={classNames(
        'flex items-center justify-center mb-0 h-screen bg-center bg-fixed h-screen bg-cover bg-center relative',
        'opacity-100  ',
        styles.darkImage 
      )}
    >
      <div className="text-center text-white">
        <h1 className="mb-4 text-5xl font-bold"> NEXT CODE </h1>
        <p className="mb-8 text-lg">
          Tu socio en desarrollo web, aplicaciones móviles y aplicaciones de escritorio.
        </p>
        <a
          href="#contactos"
          className="px-4 py-2 text-xl font-bold text-black transition duration-300 bg-white rounded-full"
        >
          ¡Contáctanos!
        </a>
      </div>
    </div>
  );
}

export default Home;


