"use client"
import styles from './Proyect.module.css';
import classNames from 'classnames';
// components/ClientSection.js
import React from 'react';

const clients = [
  // Agrega aquí los logos de tus clientes
  '/images/mhl.jpg',
  '/images/dh1.jpg',
  '/images/am.jpg',
  '/images/oasis.jpg',
  // ...
]

const ClientSection = () => {
 

  return (
    <section id='proyectos' className={classNames('py-16 text-center', styles.darkImage)}>
      <h2 className="mb-8 text-4xl font-bold text-white">Clientes que confían en nosotros</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative transition-transform transform cursor-pointer hover:scale-110"
          >
            <img
              src={client}
              alt={`Cliente ${index + 1}`}
              className="w-64 h-64 max-w-xs mx-auto rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;