// import Navbar from "./components/layout/Navbar";
// import Hero from "./components/sections/Hero";
// import About from "./components/sections/About";
// import Experience from "./components/sections/Experience";
// import Skills from "./components/sections/Skills";
// import FeaturedProjects from "./components/sections/FeaturedProjects";
// import Contact from "./components/sections/Contact";
// import Footer from "./components/layout/Footer";

// function App() {
//   return (
//     <div className="bg-slate-950 text-white">
//       <Navbar />

//       <Hero />
//       <About />
//       <Experience />
//       <Skills />
//       <FeaturedProjects />
//       <Contact />

//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;