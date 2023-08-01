import React from 'react';
import '../styles/_home.css';
import Icon from "../utils/Icon";

const Home = () => {
  return (
    <div className="home-section">
      <section className="columns-section">
        <div>
          <Icon name='design' size={32}/>
          <h3>Innovative Design</h3>
          <p>Our innovative design approach delivers creative solutions that make an impact. From unique branding to
            user-friendly interfaces, we strive to create memorable experiences that resonate with your audience.</p>
        </div>
        <div>
          <Icon name='technology' size={32}/>
          <h3>Cutting-Edge Technology</h3>
          <p>We embrace cutting-edge technology to build scalable and reliable products. Our expertise in modern
            development practices ensures that you receive top-notch solutions that drive your business forward.</p>
        </div>
        <div>
          <Icon name='support' size={32}/>
          <h3>Dedicated Support</h3>
          <p>Customer satisfaction is our top priority. Our dedicated support team is always ready to assist you with
            any questions or concerns. We're committed to providing seamless support that meets your needs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
