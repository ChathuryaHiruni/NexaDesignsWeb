import React, { useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import Blogs from './components/Blogs/Blogs'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'


const App = () => {
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const blogsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const reloadPage = () => {
    window.location.reload();
  };


  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <div ref={navbarRef}>
      <Navbar
        onHeroClick={reloadPage}
        onServiceClick={() => scrollToSection(serviceRef)}
        onBlogClick={() => scrollToSection(blogsRef)}
        onAboutUsClick={() => scrollToSection(aboutUsRef)}
        onContactClick={() => scrollToSection(footerRef)}
      />
      </div>
      <div ref={heroRef}>
        <Hero  onServiceClick={() => scrollToSection(serviceRef)}/>
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={blogsRef}>
        <Blogs />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs/>
      </div>
      <div ref={footerRef}>
      <Footer 
              onNavbarclick= {() => scrollToSection(navbarRef)}
              onServiceClick={() => scrollToSection(serviceRef)}
              onBlogClick={() => scrollToSection(blogsRef)} 
              onAboutUsClick={() => scrollToSection(aboutUsRef)}
              onContactClick={reloadPage}
      />
      </div>
     
    </main>

  )
}

export default App