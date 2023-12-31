import React, {useEffect} from 'react';
import Home from "./Home";
import Hero from "./Hero";
import About from "./About";

const Main = () => {

  useEffect(() => {
    const handleResize = () => {
      let resizeTimer;
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      if (value > 500) {
        document.querySelector('.header').classList.add('sticky')
      }else{
        document.querySelector('.header').classList.remove('sticky')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main id="home" >
      <Hero/>
      <div className="container">
        <div className="content">
          <Home/>
          <hr className="separator-line" />
          <About/>
        </div>
      </div>
    </main>
  );
};

export default Main;
