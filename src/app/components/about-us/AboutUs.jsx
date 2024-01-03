// components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="p-8 bg-black">
      <div className="max-w-2xl mx-auto text-justify">
        <h1 className="mb-4 text-5xl font-bold text-white">
          Sobre Nosotros
        </h1>
        <p className="text-2xl italic text-gray-200">
          Bienvenido a [Nombre de Tu Empresa], tu socio confiable en el mundo de
          la programación y desarrollo web.
        </p>

        {/* Agrega más contenido según sea necesario */}

        <p className="text-gray-200">
          [Nombre de tu Empresa], un apasionante proyecto nacido de
          la colaboración y dedicación de tres estudiantes de [Nombre de la
          Academia]. Nosotros, [Nombres de los Integrantes], nos unimos para
          formar una sociedad con el objetivo común de brindar soluciones
          creativas y efectivas en el mundo del desarrollo web.
        </p>
        <p className="text-gray-200">
          En nuestro viaje educativo, nos dimos cuenta de que compartíamos una
          visión única sobre cómo podríamos marcar la diferencia en el ámbito
          digital. Guiados por la curiosidad, la innovación y el deseo de crear
          experiencias excepcionales en línea, decidimos unir fuerzas y dar vida
          a [Nombre de tu Empresa].
        </p>
        <p className="text-gray-200">
          Nos enorgullece destacar que cada uno de nosotros aporta habilidades
          únicas y complementarias al equipo. Desde el diseño creativo hasta la
          programación precisa, nuestro enfoque colaborativo nos permite abordar
          proyectos con una perspectiva integral. Estamos comprometidos a
          ofrecer soluciones personalizadas que no solo cumplan, sino que
          superen las expectativas de nuestros clientes.
        </p>
        <p className="text-gray-200">
          En [Nombre de tu Empresa], no solo creamos sitios web; construimos
          experiencias digitales significativas. Valoramos la transparencia, la
          comunicación abierta y la dedicación a la excelencia en cada fase del
          proceso de desarrollo. Estamos emocionados de compartir nuestro
          conocimiento y pasión contigo, y esperamos trabajar juntos para
          convertir tus ideas en realidad. Gracias por ser parte de nuestro
          viaje. ¡Bienvenido a la familia [Nombre de tu Empresa]!
        </p>
      </div>
    </div>

    
  );
};

export default AboutUs;
