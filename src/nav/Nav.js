import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import logo from "../assets/images/logo_white.png";

const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 435px)").matches
	)

	useEffect(() => {
		function handleScroll() {
		  if (window.pageYOffset > 0) {
			setIsScrolled(true);
		  } else {
			setIsScrolled(false);
		  }
		}
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);

	useEffect(() => {
		window
		.matchMedia("(min-width: 435px)")
		.addEventListener('change', e => setMatches(e.matches))
	}, []);
	  
	
	const navbarStyle = {
		backgroundColor: isScrolled ? 'black' : 'transparent',
		transition: 'background-color 0.3s ease-in-out',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 1000
	};

	const smallNavbarStyle = {
		backgroundColor: isScrolled ? 'black' : 'transparent',
		transition: 'background-color 0.3s ease-in-out',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 1000
	};

	if (matches) {
		return (
			<nav style={navbarStyle}>
				{/* <img src={logo}/> */}
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
					<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
				))}
			</nav>
		)
	} else {
		return (
			<nav style={smallNavbarStyle}>
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
					<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
				))}
			</nav>			
		)
	}
};

export default Nav;
