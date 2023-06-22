import React from 'react';
import { Home, Services, Contact} from './';
import Pics from './Photos';
import About from './About';

const Main = () => {

	return (
	<main>
		<Home />
		<Services />
		<Pics limit={12}/>
		<Contact />
		<About />
	</main>
	)
};

export default Main;
