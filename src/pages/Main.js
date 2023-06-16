import React from 'react';
import { Home, Services, Contact} from './';
import Pics from './Photos';
import About from './About';

const Main = () => (
	<main>
		<Home />
		<Services />
		<Pics token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
		<Contact />
		<About />
	</main>
);

export default Main;
