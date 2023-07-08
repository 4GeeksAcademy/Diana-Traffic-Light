import React from "react";
import TrafficLight from "./traffic-light.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center" id="semáforo__contenedor">
			<TrafficLight/>
		</div>
	);
};

export default Home;
