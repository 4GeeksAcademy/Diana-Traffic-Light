import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {

const colors = ['red', 'yellow', 'green'];
const [color, setColor] = useState("red");

const changeColorRandomly = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };


	return (
		<div className="traffic-light">
			<div className={"light red" + ( color === "red" ? " selected" : "")} onClick={() => setColor("red")}></div>
			<div className={"light yellow" + ( color === "yellow" ? " selected" : "")} onClick={() => setColor("yellow")} ></div>
			<div className={"light green" + ( color === "green" ? " selected" : "")} onClick={() => setColor("green")} ></div>
			<button onClick={changeColorRandomly}> Cambia el color </button>
		</div>
		
	);
};

export default Home;
