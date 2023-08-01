import React from 'react';
import Home from "./Home";
import Hero from "./Hero";

const Main = () => {
  return (
    <main>
      <Hero/>
      <div className="container">
        <div className="content">
          <Home/>
        </div>
      </div>
    </main>
  );
};

export default Main;
