import React, { useState, useEffect } from "react";
import { useNav } from '../customHooks/useNav';
import './Page.css';
import image from '../assets/images/hero-banner-edit.jpg'
import small_image from "../assets/images/small-wallpaper-edit.jpg";
import logo from "../assets/images/logo_white.png";

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 435px)").matches
  	);
	
	useEffect(() => {
		window
		.matchMedia("(min-width: 435px)")
		.addEventListener('change', e => setMatches(e.matches))
	  }, []);

	//   	useEffect(() => {
    //     async function fetchTodo() {
    //       const API = '/.netlify/functions/todo';
    //       console.log(API);
    //       const todo = await fetch(API).then((res) => console.log(res));
    //       console.log(todo);
    //       try {
    //         // const test = await fetch(API)
    //         const todo = await fetch(API).then((res) => res.json());
    //         // console.log('test', test);
    //         console.log(todo);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }
    //     fetchTodo();
    //   }, []);

	// const imageURL = image
	// style={{ background: `url(${require(imageURL)}) no-repeat`}}
	return (
    <section className="home-main-section" ref={homeRef} id="homeContainer">
      {matches ? (
        <img className="home-background-img" src={image} alt="amglogo" />
      ) : (
        <img className="home-background-img" src={small_image} alt="amglogo" />
      )}
      {/* <img className="home-background-img" src={image} alt="amglogo" /> */}
      <div className="text-container">
		<img src={logo} className="logoImg" alt="imglogo"/>
        {/* <h1 className="h1-hero-title">Golden Door Barber</h1>
        <p className="hero-text">
          Get sharp, stay sharp - grooming services that keep you looking and
          feeling your best.
        </p> */}
      </div>
    </section>
  );
};

export default Home;
