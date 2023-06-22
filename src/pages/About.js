import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import barber from '../assets/images/3333.jpg'



const About = () => {

	const aboutRef = useNav('About Us');

	return (
    <div ref={aboutRef} id="aboutContainer">
      <div className="main">
        <img src={barber} />
        <div className="about-text">
          <h1>About Us</h1>
          <h5>Barber</h5>
          <p>
            Hey, I'm Bilal, a passionate barber from Jordan. With 17 years of
            experience, I've been shaping hairstyles in San Francisco for the
            past decade. I love what I do and take pride in creating clean,
            stylish cuts that boost confidence. My goal is to bring out the best
            in each person and leave a lasting impression on every client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
