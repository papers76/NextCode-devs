"use client"


// Components/Gallery.js
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const ProjectB = [
// you can add more image if you want
    {
      imageUrl: "https://images.pexels.com/photos/11213201/pexels-photo-11213201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Proyecto 1",
      title: "Administracion Barberia",
    },
    {
      imageUrl: "https://images.pexels.com/photos/5792322/pexels-photo-5792322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Proyecto 2",
      title: "Administracion Pizzeria",
    },
    {
      imageUrl: "https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Proyecto 3",
      title: "Administracion Conferencias",
    },
    
  ];



  const slides = ProjectB.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full bg-black">
      <div className="">
        <div className="flex flex-col flex-wrap h-full gap-0 mx-2 md:grid md:grid-cols-3 md:mx-0">
          {ProjectB.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-screen relative">
                <div className="h-full group">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="absolute bottom-0 z-10 text-3xl text-white left-2">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out bg-black opacity-0 group-hover:opacity-75"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="w-16 h-16 p-3 text-5xl border rounded-full cursor-pointer bg-neutral-500 hover:bg-white hover:text-black" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
};

export default Project;





/*
import React from 'react'

function Projects() {
  return (
    <div>Projects</div>
  )
}

export default Projects

*/