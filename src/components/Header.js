import React, {useEffect, useState} from 'react';
import "../styles/_header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }



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
    <header className="header">
      <h1>My Site</h1>
      <button onClick={toggleMenu} className={`menu-toggle ${isOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={` ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
