import React from 'react';
import "../styles/_footer.css"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Daniel Szulc {year} @ All rights reserved</p>
    </footer>
  );
};

export default Footer;
