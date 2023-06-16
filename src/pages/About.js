import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import barber from '../assets/images/3333.jpg'



const About = () => {

	const aboutRef = useNav('About Us');

	return (
    <div ref={aboutRef} id="aboutContainer">
      <div className="main">
        <img src={barber}/>
        <div className="about-text">
          <h1>About Us</h1>
          <h5>Barber</h5>
          <p>
            Hi there, I'm Bilal, a passionate barber from Jordan. With
            17 years of experience in the barbering industry, I've been proudly
            shaping the hairstyles of San Francisco for the past decade. I find
            great joy in my craft, creating clean and stylish cuts that enhance
            the confidence of my community. Through the art of barbering, I
            strive to bring out the best in each individual and leave a lasting
            impression with every client who sits in my chair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
