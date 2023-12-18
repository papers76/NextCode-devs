import React from 'react';
import classNames from 'classnames';
import styles from './Home.module.css';

function Home() {
  return (
    <div
      className={classNames(
        'flex items-center justify-center h-screen bg-cover bg-center relative',
        'bg-opacity-70',
        styles.darkImage 
      )}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Nexo Desarrollo</h1>
        <p className="text-lg mb-8">
          Tu socio en desarrollo web, aplicaciones móviles y aplicaciones de escritorio.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          ¡Contáctanos!
        </a>
      </div>
    </div>
  );
}

export default Home;


