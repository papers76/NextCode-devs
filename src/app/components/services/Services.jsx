import React from "react";

const servicesData = [
  {
    title: "Desarrollo web",
    description:
      "Ofrecemos el desarrollo desde landing page hasta sitios web empresariales o autoadministrables",
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_640.jpg",
  },
  {
    title: "Aplicaciones de escritorio y móviles",
    description: "Descripción acorde a este servicio",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg",
  },
  {
    title: "Hosting",
    description:
      "No solo creamos tu sitio web o app, sino que nos encargamos de sacarla al mercado y mantenerla",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/07/31/11/46/laptop-2557586_1280.jpg",
  },
  {
    title: "Marketing",
    description:
      "Tenemos el servicio de Community manager, creacion de anuncios y marketing para tu empresa",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png",
  },
];

function Services() {
  return (
    <div className="flex items-center justify-center pt-4 pb-8 bg-zinc-800">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <h3 className="mt-2 mb-4 text-4xl font-bold text-white col-span-full md:mt-4">
          Nuestros Servicios
        </h3>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-72">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={service.imageSrc}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white font-dmserif">
                {service.title}
              </h1>
              <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {service.description}
              </p>
              <button className="rounded-full bg-cyan-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
