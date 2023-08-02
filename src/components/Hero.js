import React from 'react';
import '../styles/_hero.css';
import Icon from "../utils/Icon";

const Home = () => {
  return (
      <section className="hero-section">
        <div className="hero-text">
        <h1>Daniel Szulc</h1><a className="source-info" target='_blank' rel='noreferrer' href='https://pixabay.com/photos/rough-horn-alpine-2146181/'>Image downloaded from Pixabay</a>
        </div>
        <div  className="mouse-scroll">
          <a id="mouse-scrollClick" href="#columns">
              <Icon name='mouseScroll' size='50'/>
          </a>
        </div>
      </section>
  );
};

export default Home;
