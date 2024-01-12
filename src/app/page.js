

import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";
import HomeB from "./components/homeBanner/Home";
import NavBar from "./components/navBar/NavBar";
import Project from "./components/projects/Projects";
import Services from "./components/services/Services";



export default function Home() {
  return (
    <main>

     <NavBar/>
     
     <HomeB/>

     <Services/>  
     
     <AboutUs />
    
     
     <div >
      <Project />
    </div>
     
     
     <Footer />

    </main>
  );
}




/*
import React from "react";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;

*/


// app/page.js



/*
export default function Home() {
  return (
    <div className="w-full my-24">
      <Project />
    </div>
  );
}
*/
