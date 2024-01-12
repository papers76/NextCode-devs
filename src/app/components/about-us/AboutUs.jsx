// components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div id="nosotros" className="p-8 bg-black">
      <div className="max-w-2xl mx-auto text-justify">
        <h1 className="mb-4 text-5xl font-bold text-white">
          Sobre Nosotros
        </h1>
        <p className="text-2xl italic text-gray-200">
          Bienvenido a NextCode, tu socio confiable en el mundo de
          la programación y desarrollo web.
        </p>

        {/* Agrega más contenido según sea necesario */}

        <p className="text-gray-200">
        Exequiel, José, Nicolás y Ariel, nos unimos para formar una sociedad con el objetivo común de brindar soluciones creativas y efectivas en el mundo del desarrollo web.
        </p>
        <p className="text-gray-200">
        En nuestro viaje educativo, nos dimos cuenta, que compartíamos una visión única sobre cómo podríamos marcar la diferencia en el ámbito digital. Guiados por la curiosidad, la innovación y el deseo de crear experiencias excepcionales en línea, decidimos unir fuerzas y dar vida a NextCode.
        </p>
        <p className="text-gray-200">
        Cada uno de nosotros aporta habilidades únicas  para lograr desde un diseño creativo hasta una programacion precisa.  Nuestro enfoque colaborativo permite abordar proyectos con una perspectiva integral,  garantizando soluciones que cumplan y superen las expectativas de nuestros clientes.
        </p>
        <p className="text-gray-200">
        En NextCode, estamos emocionados de compartir nuestro conocimiento y pasión contigo. 
        Unamos esfuerzos para convertir tus ideas en realidad.

        Gracias por ser parte de nuestro viaje. ¡Bienvenido!
        </p>
      </div>
    </div>

    
  );
};

export default AboutUs;
