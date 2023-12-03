"use client"; 
import { useState } from "react"
import Image from "next/image"

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = 7; 

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }
  
  function handlePrev() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  }

  return (
    <div id='section-1'>
      <div className='flex items-center justify-between'>
        <button onClick={handlePrev}>Anterior</button>
        <Image
          src={`/images/img${currentIndex + 1}.jpg`}
          width={200}
          height={81}
          alt={`imagen-${currentIndex + 1}`}
        />
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default Home