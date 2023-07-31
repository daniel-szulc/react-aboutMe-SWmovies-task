import React from 'react';
import "../styles/_header.css"

const Header = () => {
  return (
    <header>
      <h1>My Site</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
