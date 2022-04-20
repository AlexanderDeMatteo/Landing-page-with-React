import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar />
				<Footer />

				<div classname="container" id="box">
					<Jumbotron />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
