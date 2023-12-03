"use client";
import { useState } from "react";
import styles from './Home.module.css';

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
    <div id='section-1' className={styles.container}>
      <div className='flex items-center justify-between'>
        <button onClick={handlePrev} className={`${styles.navigationButton} bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center`}>
          &#129168; 
        </button> 
        <div className={`${styles.imageContainer} relative w-full h-0 pb-[40%] overflow-hidden transition-opacity duration-500 ease-in-out`}>
          <img
            src={`/images/img${currentIndex + 1}.jpg`}
            alt={`imagen-${currentIndex + 1}`}
            className={`${styles.image} absolute inset-0 w-full h-full object-cover`}
          />
        </div>
        <button onClick={handleNext} className={`${styles.navigationButton} bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center`}>
          &#129170;
        </button>
      </div>
    </div>
  );
}

export default Home;

