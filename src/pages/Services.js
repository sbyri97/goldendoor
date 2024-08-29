import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import haircut from '../assets/images/haircut_white.png'
import hairAndBeard from "../assets/images/hair_and_beard_white.png";
import beard from "../assets/images/beard_white.png";
import shampoo from "../assets/images/shampoo_white.png";
import shave from "../assets/images/shave_white.png";
import buzzcut from "../assets/images/buzzcut_white.png";
// import servicesBackgroundImg from '../assets/images/services_background.jpg'
// import { GiRazorBlade } from "react-icons/gi";
// import {MdOutlineSoap} from "react-icons/md"
// import {FaPumpSoap} from "react-icons/fa"
// import {TbRazorElectric} from "react-icons/tb"



const Services = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const serviceRef = useNav('Services');

	return (
    <div ref={serviceRef} id="serviceContainer">
      <h1 className="heading">BARBER SERVICES</h1>
      <div className="box-container">
        <div className="box">
          <img src={haircut} alt="" />
          <h3>Haircut</h3>
          <h4>$50</h4>
        </div>

        <div className="box">
          <img src={hairAndBeard} alt="" />
          <h3>Haircut & Beard</h3>
          <h4>$70</h4>
        </div>

        <div className="box">
          <img src={buzzcut} alt="" />
          <h3>Buzzcut</h3>
          <h4>$35</h4>
        </div>

        <div className="box">
          <img src={beard} alt="" />
          <h3>Beard</h3>
          <h4>$30</h4>
        </div>

        <div className="box">
          <img src={shave} alt="" />
          <h3>Shave</h3>
          <h4>$30</h4>
        </div>

        <div className="box">
          <img src={shampoo} alt="" />
          <h3>Shampoo</h3>
          <h4>$15</h4>
        </div>
      </div>
    </div>
    // <section ref={serviceRef} id='serviceContainer' style={{backgroundImage:`url(${servicesBackgroundImg})`, backgroundRepeat: "no-repeat"}}>
    // 	{/* load backgorund image here */}
    // 	<div className='serviceContainer-div'>
    // 		{/* put padding here for the container-div */}
    // 		<div className='serviceTitle-main-container'>
    // 			{/* put padding here for the title */}
    // 			<div className='serviceTitle'>
    // 				{/* this is where the title goes BARBER SERVICES */}
    // 				BARBER SERVICES
    // 			</div>
    // 		</div>
    // 		<div className='emptyPaddingDiv'></div>
    // 		<div className='servicesList-main-container'>
    // 			{/* put paddign or margin here for the list */}
    // 			<div className='servicesList-div'>
    // 				{/* can start list here */}
    // <div className='servicesList-ul-div'>
    // 	<i class='fi fi-rr-barber-shop'></i>
    // 	<ul className='servicesList-ul'>Haircut</ul>
    // 	<h4 className='pricesList-ul'>$45</h4>
    // </div>
    // <div className='servicesList-ul-div'>
    // 	<TbRazorElectric style={{color: "wheat", marginRight: "25px"}}/>
    // 	<ul className='servicesList-ul'>Haircut & Beard</ul>
    // 	<h4 className='pricesList-ul'>$65</h4>
    // </div>
    // <div className='servicesList-ul-div'>
    // 	<GiRazorBlade style={{color: "wheat", marginRight: "25px"}}/>
    // 	<ul className='servicesList-ul'>Beard Trim</ul>
    // 	<h4 className='pricesList-ul'>$30</h4>
    // </div>
    // <div className='servicesList-ul-div'>
    // 	<i class="fi fi-rr-user"></i>
    // 	<ul className='servicesList-ul'>Shave</ul>
    // 	<h4 className='pricesList-ul'>$30</h4>
    // </div>
    // <div className='servicesList-ul-div'>
    // 	<MdOutlineSoap style={{color: "wheat", marginRight: "25px"}}/>
    // 	<ul className='servicesList-ul'>Shampoo Services</ul>
    // 	<h4 className='pricesList-ul'>$15</h4>
    // </div>
    // <div className='servicesList-ul-div'>
    // 	<FaPumpSoap style={{color: "wheat", marginRight: "25px"}}/>
    // 	<ul className='servicesList-ul'>Buzz Cut</ul>
    // 	<h4 className='pricesList-ul'>$35</h4>
    // </div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </section>
  );
};

export default Services;
