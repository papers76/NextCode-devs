

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
     
     <div className="w-full my-24">
      <Project />
    </div>
     
     
     <Footer />

    </main>
  );
}

