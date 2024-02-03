import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp, // Importar el icono de WhatsApp
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon hover:text-cyan-600" size={30} />
  </a>
);

const Footer = () => {
  const items = [
    { type: "icon", icon: MdOutgoingMail, link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=nexodigital.consultas@gmail.com" },
    { type: "icon", icon: FaInstagram, link: "https://www.instagram.com/iamnextcodedevs?igsh=MTg1dGRvZXNmYjNhNQ==" },
    { type: "icon", icon: FaWhatsapp, link: "https://wa.me/tunumerodetelefono?text=Hola%2C%20quiero%20enviarte%20un%20mensaje%20en%20WhatsApp.%20" },
  ];

  const sections = [
    { title: "Servicios", items: [""] },
    { title: "Nosotros", items: [""] },
    { title: "Proyectos", items: [""] },
    { title: "Legales", items: [""] },
  ];

  return (
    <div className="bg-[#000300] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold lg:text-4xl xl:text-5xl text-cyan-600">
          NextCode Devs
        </h1>
        <p className="py-4 text-justify">
          Una empresa conformada por profesionales en el área de Tecnología IT.
          Nos enfocamos principalmente a prestar servicios en desarrollos multiplataforma con .Net, Next y Node Js.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {items.map((item, index) => (
            <SocialIcon key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6 lg:col-span-2">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="text-xl font-medium text-gray-100">{section.title}</h6>
            <ul>
              {section.items.map((item, subIndex) => (
                <li key={subIndex} className="py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;



/*import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp, // Importar el icono de WhatsApp
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon hover:text-cyan-600" size={30} />
  </a>
);

/* const Footer = () => {
  const items = [
    { type: "icon", icon: MdOutgoingMail, link: "https://mail.google.com/mail/u/1/#inbox" }, // Reemplazar con tu dirección de correo
    { type: "icon", icon: FaInstagram, link: "https://www.instagram.com/iamnextcodedevs?igsh=MTg1dGRvZXNmYjNhNQ==" },
    { type: "icon", icon: FaWhatsapp, link: "https://wa.me/tunumerodetelefono" }, // Reemplazar con tu número de teléfono en el formato internacional
  ];

  const sections = [
    { title: "Servicios", items: [""] },
    { title: "Nosotros", items: [""] },
    { title: "Proyectos", items: [""] },
    { title: "Legales", items: [""] },
  ];

  
const Footer = () => {
  const items = [
    { type: "icon", icon: MdOutgoingMail, link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=correo%40dominio.com" },
    { type: "icon", icon: FaInstagram, link: "https://www.instagram.com/iamnextcodedevs?igsh=MTg1dGRvZXNmYjNhNQ==" },
    { type: "icon", icon: FaWhatsapp, link: "https://wa.me/tunumerodetelefono?text=Hola%2C%20quiero%20enviarte%20un%20mensaje%20en%20WhatsApp.%20" },
  ];


  return (
    <div className="bg-[#000300] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold lg:text-4xl xl:text-5xl text-cyan-600">
          NextCode Devs
        </h1>
        <p className="py-4 text-justify">
          Una empresa conformada por profesionales en el área de Tecnología IT.
          Nos enfocamos principalmente a prestar servicios en desarrollos multiplataforma con .Net, Next y Node Js.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {items.map((item, index) => (
            <SocialIcon key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6 lg:col-span-2">
        {section.map((section, index) => (
          <div key={index}>
            <h6 className="text-xl font-medium text-gray-100">{section.title}</h6>
            <ul>
              {section.items.map((item, subIndex) => (
                <li key={subIndex} className="py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;


*/