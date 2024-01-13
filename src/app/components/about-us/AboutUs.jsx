// components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div id="nosotros" className="w-full h-auto p-4 bg-black sm:p-8">

      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 pr-0 sm:pr-4">
          <h1 className="mb-4 text-6xl font-bold text-white sm:text-5xl">
            Sobre Nosotros
          </h1>
          <p className="text-lg italic text-gray-200 sm:text-3xl">
          Bienvenido a<span className="text-4xl text-cyan-600"> NextCode</span>, tu socio confiable en el mundo de la programación y desarrollo web.
          </p>
        </div>
        <div className="flex-1 pl-0 mt-4 sm:pl-4 sm:mt-0">
          <p className="text-xl text-gray-200">
            Exequiel, José, Nicolás y Ariel, nos unimos para formar una sociedad con el objetivo común de brindar soluciones creativas y efectivas en el mundo del desarrollo web.
          </p>
          <p className="text-xl text-gray-200">
            En nuestro viaje educativo, nos dimos cuenta, que compartíamos una visión única sobre cómo podríamos marcar la diferencia en el ámbito digital. Guiados por la curiosidad, la innovación y el deseo de crear experiencias excepcionales en línea, decidimos unir fuerzas y dar vida a NextCode.
          </p>
        </div>
        <div className="flex-1 pl-0 mt-4 sm:pl-4 sm:mt-0">
          <p className="text-xl text-gray-200">
            Cada uno de nosotros aporta habilidades únicas para lograr desde un diseño creativo hasta una programación precisa. Nuestro enfoque colaborativo permite abordar proyectos con una perspectiva integral, garantizando soluciones que cumplan y superen las expectativas de nuestros clientes.
          </p>
          <p className="text-xl text-gray-200">
            En NextCode, estamos emocionados de compartir nuestro conocimiento y pasión contigo. Unamos esfuerzos para convertir tus ideas en realidad. Gracias por ser parte de nuestro viaje. ¡Bienvenido!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
