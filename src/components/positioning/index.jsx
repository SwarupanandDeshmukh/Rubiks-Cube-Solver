import React from "react";
import cube_pos from "./cube_position.png";
import axis from "./3D_axis.png";
import "./style.css";

// Structure of orientation guide page
export default function Position(props) {
	return (
		<div className="position__container flex__center--col">
			<div className="position__heading">
				Make sure the cube follows these rules.
			</div>
			<ul className="position__side--color flex__center--row">
				<li className="position__side"><b className="position__side">Green</b> center at Front</li>
				<li className="position__side"><b className="position__side">White</b> center at Top</li>
				<li className="position__side"><b className="position__side">Red</b> center at Right</li>
			</ul>
			<ul className="position__side--color flex__center--row">
				<li className="position__side"><b className="position__side">Blue</b> center at Back</li>
				<li className="position__side"><b className="position__side">Yellow</b> center at Bottom</li>
				<li className="position__side"><b className="position__side">Orange</b> center at Left</li>
			</ul>
			<div className="cube__pos--container">
				<img
					src={cube_pos}
					alt="Rubiks Cube Position Set"
					className="cube__pos--pic"
				/>
			</div>
			<img src={axis} alt="3D Axis" className="position__axis" />
			<button className="pos__btn" onClick={props.handleClick}>
				Okay
			</button>
		</div>
	);
}
