// import React from 'react'
// import Face from "./face"
// import { useState } from 'react';
// import solver from "rubiks-cube-solver";			
// import "./style.css"

// // Structure for face color input page
// export default function FaceSet(props)
// {
// 	let [movesNum, setMovesNum] = useState(0);
// 	// Solves cubes and generates output text(Steps to solve)
// 	function solveCube()
// 	{
// 		// Convert color into corresponding side 
// 			function color_to_side(colors) {
// 				let sideValue = colors.map((color) => {
// 					let result = "f";
// 					switch (color) {
// 						// "green" is in front face. So, its side is "f"
// 						case "green":
// 							result = "f";
// 							break;
// 						case "red":
// 							result = "r";					// "r" is right face
// 							break;
// 						case "white":
// 							result = "u";					// "u" is upper face
// 							break;
// 						case "yellow":
// 							result = "d";					// "d" is down face
// 							break;
// 						case "orange":
// 							result = "l";					// "l" is left face
// 							break;
// 						case "blue":
// 							result = "b";					// "b" is back face
// 							break;
// 						default:
// 							console.log(
// 								"Invalid Color to Side Conversion. Default side used"
// 							);
// 					}
// 					return result;
// 				});
// 				return sideValue;
// 			}
// 			// Collect the side names into separate variables
// 			let frontFace = color_to_side(props.cubeColorState.front).join("");
// 			let rightFace = color_to_side(props.cubeColorState.right).join("");
// 			let upperFace = color_to_side(props.cubeColorState.upper).join("");
// 			let downFace = color_to_side(props.cubeColorState.down).join("");
// 			let leftFace = color_to_side(props.cubeColorState.left).join("");
// 			let backFace = color_to_side(props.cubeColorState.back).join("");
// 			// Merge the collected side names into an array
// 			let cubeState = [
// 				frontFace,
// 				rightFace,
// 				upperFace,
// 				downFace,
// 				leftFace,
// 				backFace,
// 			].join("");
// 			// Side names are merged to make a proper input format for "solver" 
// 			// "solver" solves "cubeState" and generates output text as forward algorithm
// 			let solveMoves = solver(cubeState).split(" ");
// 			console.log(solveMoves);
// 			// Convert forward algorithm into reverse algorithm and store
// 			let reverseMoves = solveMoves.map((move) => {
// 				if(move.includes("2"))
// 					return move;
// 				else if(move.includes("prime"))
// 					return move.replace("prime", "");
// 				else
// 					return (move + "prime");
// 			}).reverse();
// 			// Now, algorithm is stored in "App.jsx" from here
// 			props.setAlgo({solveMoves, reverseMoves});
// 			// Set no. of moves needed
// 			setMovesNum(solveMoves.length);	
// 			// Take user to next page
// 			props.handleClick();
// 	}
// 	return (
// 		<div className="face__set--section flex__center--col">
// 			<div className="face__set--title">Type Face Color</div>
// 			<div className="face__set--body flex__center--row">
// 				<ul className="color__value--container">
// 					<div className="color__heading">Colors: </div>
// 					<li className="color__value green"><b>g</b> = Green</li>
// 					<li className="color__value red"><b>r</b> = Red</li>
// 					<li className="color__value white"><b>w</b> = White</li>
// 					<li className="color__value yellow"><b>y</b> = Yellow</li>
// 					<li className="color__value orange"><b>o</b> = Orange</li>
// 					<li className="color__value blue"><b>b</b> = Blue</li>
// 				</ul>
// 				<div className="face__set--container flex__center--row">
// 					<div className="face__info">
// 						<div className="face__name">Front Green Face</div>
// 							<Face side={props.colors.front} />
// 						<input name="front" type="text" className='color__input' placeholder='ggggggggg' onChange={props.handleChange}/>
// 					</div>
// 					<div className="face__info">
// 						<div className="face__name">Right Red Face</div>
// 							<Face side={props.colors.right} />
// 						<input name="right" type="text" className='color__input' placeholder='rrrrrrrrr' onChange={props.handleChange}/>
// 					</div>
// 					<div className="face__info">
// 						<div className="face__name">Upper White Face</div>
// 							<Face side={props.colors.upper} />
// 						<input name="upper" type="text" className='color__input' placeholder='wwwwwwwww' onChange={props.handleChange}/>
// 					</div>
// 					<div className="face__info">
// 						<div className="face__name">Down Yellow Face</div>
// 							<Face side={props.colors.down} />
// 						<input name="down" type="text" className='color__input' placeholder='yyyyyyyyy' onChange={props.handleChange}/>
// 					</div>
// 					<div className="face__info">
// 						<div className="face__name">Left Orange Face</div>
// 							<Face side={props.colors.left} />
// 						<input name="left" type="text" className='color__input' placeholder='ooooooooo' onChange={props.handleChange}/>
// 					</div>
// 					<div className="face__info">
// 						<div className="face__name">Back Blue Face</div>
// 							<Face side={props.colors.back} />
// 						<input name="back" type="text" className='color__input' placeholder='bbbbbbbbb' onChange={props.handleChange}/>
// 					</div>
// 				</div>
// 				{/* <div className="example__colors">
// 					<div className="example__color--heading">Example:</div>
// 					<ul className="example__list">
// 						<li className="example__item green">ggyggwggg</li>
// 						<li className="example__item red">rrwbrrwrr</li>
// 						<li className="example__item white">wwowwgwwg</li>
// 						<li className="example__item yellow">yyryyyyyy</li>
// 						<li className="example__item orange">boooooooo</li>
// 						<li className="example__item blue">brrbbbbbb</li>
// 					</ul>
// 				</div> */}
// 			</div>
// 			<button className="color__set--btn" onClick={solveCube}>Next</button>
// 		</div>
// 	);
// }


import React from 'react'
import Face from "./face"
import { useState } from 'react';
import "./style.css"

export default function FaceSet(props)
{
	let [movesNum, setMovesNum] = useState(0);
	let [solving, setSolving] = useState(false);
	let [errorMsg, setErrorMsg] = useState("");
	
	// Check if cube is already solved
	function isCubeSolved(cubeState) {
		const faces = [
			cubeState.slice(0, 9),   // front
			cubeState.slice(9, 18),  // right
			cubeState.slice(18, 27), // upper
			cubeState.slice(27, 36), // down
			cubeState.slice(36, 45), // left
			cubeState.slice(45, 54)  // back
		];
		
		// Check if each face has all same colors
		for (let face of faces) {
			const firstColor = face[0];
			if (!face.split('').every(color => color === firstColor)) {
				return false;
			}
		}
		
		return true;
	}
	
	// Kociemba solver using cubejs
	async function kociembaSolve(cubeState) {
		try {
			const Cube = (await import('cubejs')).default;
			
			// Convert our cube state to cubejs format
			// Our format: ffffffffffffrrrrrrrrruuuuuuuuudddddddddlllllllllbbbbbbbbb
			// cubejs expects: URFDLB order with proper face mapping
			
			const f = cubeState.slice(0, 9);
			const r = cubeState.slice(9, 18);
			const u = cubeState.slice(18, 27);
			const d = cubeState.slice(27, 36);
			const l = cubeState.slice(36, 45);
			const b = cubeState.slice(45, 54);
			
			// Convert to uppercase for cubejs
			const cubeString = (u + r + f + d + l + b).toUpperCase();
			
			console.log("Cube string for cubejs:", cubeString);
			
			// Initialize cube
			Cube.initSolver();
			const cube = Cube.fromString(cubeString);
			const solution = cube.solve();
			
			console.log("Cubejs solution:", solution);
			
			// Parse solution
			const moves = solution.trim().split(/\s+/).filter(m => m.length > 0);
			
			// Convert notation (2 stays 2, ' becomes prime)
			const formattedMoves = moves.map(move => {
				if (move.endsWith("'")) {
					return move.slice(0, -1) + "prime";
				}
				return move;
			});
			
			return formattedMoves;
			
		} catch (error) {
			console.error("Kociemba solver error:", error);
			throw error;
		}
	}
	
	// Fallback solver with optimization
	async function fallbackSolve(cubeState) {
		const solver = (await import("rubiks-cube-solver")).default;
		let basicSolution = solver(cubeState).split(" ").filter(m => m.length > 0);
		return optimizeMoveSequence(basicSolution);
	}
	
	function optimizeMoveSequence(moves) {
		let optimized = [...moves];
		let changed = true;
		
		while (changed) {
			changed = false;
			let newMoves = [];
			let i = 0;
			
			while (i < optimized.length) {
				let current = optimized[i];
				let next = i + 1 < optimized.length ? optimized[i + 1] : null;
				
				if (next) {
					let currentBase = current.replace(/prime|2/g, '');
					let nextBase = next.replace(/prime|2/g, '');
					
					if (currentBase === nextBase) {
						let currentCount = current.includes('2') ? 2 : current.includes('prime') ? 3 : 1;
						let nextCount = next.includes('2') ? 2 : next.includes('prime') ? 3 : 1;
						let totalCount = (currentCount + nextCount) % 4;
						
						if (totalCount === 0) {
							i += 2;
							changed = true;
							continue;
						} else if (totalCount === 1) {
							newMoves.push(currentBase);
						} else if (totalCount === 2) {
							newMoves.push(currentBase + '2');
						} else {
							newMoves.push(currentBase + 'prime');
						}
						i += 2;
						changed = true;
						continue;
					}
				}
				
				newMoves.push(current);
				i++;
			}
			
			optimized = newMoves;
		}
		
		return optimized;
	}
	
	async function solveCube()
	{
		setSolving(true);
		setErrorMsg("");
		
		try {
			function color_to_side(colors) {
				let sideValue = colors.map((color) => {
					let result = "f";
					switch (color) {
						case "green": result = "f"; break;
						case "red": result = "r"; break;
						case "white": result = "u"; break;
						case "yellow": result = "d"; break;
						case "orange": result = "l"; break;
						case "blue": result = "b"; break;
						default: console.log("Invalid Color to Side Conversion");
					}
					return result;
				});
				return sideValue;
			}
			
			let frontFace = color_to_side(props.cubeColorState.front).join("");
			let rightFace = color_to_side(props.cubeColorState.right).join("");
			let upperFace = color_to_side(props.cubeColorState.upper).join("");
			let downFace = color_to_side(props.cubeColorState.down).join("");
			let leftFace = color_to_side(props.cubeColorState.left).join("");
			let backFace = color_to_side(props.cubeColorState.back).join("");
			
			let cubeState = [frontFace, rightFace, upperFace, downFace, leftFace, backFace].join("");
			
			console.log("Cube state:", cubeState);
			
			// Check if cube is already solved
			if (isCubeSolved(cubeState)) {
				setSolving(false);
				alert("🎉 Congratulations! Your cube is already solved! 🎉");
				return;
			}
			
			let solveMoves;
			let algoName;
			
			try {
				console.log("Attempting Kociemba solver...");
				solveMoves = await kociembaSolve(cubeState);
				console.log(`Kociemba solution: ${solveMoves.length} moves`, solveMoves);
				algoName = "Kociemba Two-Phase Algorithm";
			} catch (kociembaError) {
				console.warn("Kociemba failed, using fallback:", kociembaError);
				setErrorMsg("Using optimized solver");
				solveMoves = await fallbackSolve(cubeState);
				console.log(`Fallback solution: ${solveMoves.length} moves`, solveMoves);
				algoName = "Optimized Layer-by-Layer";
			}
			
			let reverseMoves = solveMoves.map((move) => {
				if(move.includes("2"))
					return move;
				else if(move.includes("prime"))
					return move.replace("prime", "");
				else
					return (move + "prime");
			}).reverse();
			
			props.setAlgo({solveMoves, reverseMoves}, algoName);
			setMovesNum(solveMoves.length);	
			setSolving(false);
			props.handleClick();
			
		} catch (error) {
			console.error("Solving error:", error);
			setSolving(false);
			setErrorMsg("Error solving cube. Please check your input.");
		}
	}
	
	return (
		<div className="face__set--section flex__center--col">
			<div className="face__set--title">Type Face Color</div>
			<div className="face__set--body flex__center--row">
				<ul className="color__value--container">
					<div className="color__heading">Colors: </div>
					<li className="color__value green"><b>g</b> = Green</li>
					<li className="color__value red"><b>r</b> = Red</li>
					<li className="color__value white"><b>w</b> = White</li>
					<li className="color__value yellow"><b>y</b> = Yellow</li>
					<li className="color__value orange"><b>o</b> = Orange</li>
					<li className="color__value blue"><b>b</b> = Blue</li>
				</ul>
				<div className="face__set--container flex__center--row">
					<div className="face__info">
						<div className="face__name">Front Green Face</div>
						<Face side={props.colors.front} />
						<input name="front" type="text" className='color__input' placeholder='ggggggggg' onChange={props.handleChange}/>
					</div>
					<div className="face__info">
						<div className="face__name">Right Red Face</div>
						<Face side={props.colors.right} />
						<input name="right" type="text" className='color__input' placeholder='rrrrrrrrr' onChange={props.handleChange}/>
					</div>
					<div className="face__info">
						<div className="face__name">Upper White Face</div>
						<Face side={props.colors.upper} />
						<input name="upper" type="text" className='color__input' placeholder='wwwwwwwww' onChange={props.handleChange}/>
					</div>
					<div className="face__info">
						<div className="face__name">Down Yellow Face</div>
						<Face side={props.colors.down} />
						<input name="down" type="text" className='color__input' placeholder='yyyyyyyyy' onChange={props.handleChange}/>
					</div>
					<div className="face__info">
						<div className="face__name">Left Orange Face</div>
						<Face side={props.colors.left} />
						<input name="left" type="text" className='color__input' placeholder='ooooooooo' onChange={props.handleChange}/>
					</div>
					<div className="face__info">
						<div className="face__name">Back Blue Face</div>
						<Face side={props.colors.back} />
						<input name="back" type="text" className='color__input' placeholder='bbbbbbbbb' onChange={props.handleChange}/>
					</div>
				</div>
			</div>
			<button className="color__set--btn" onClick={solveCube} disabled={solving}>
				{solving ? 'Solving with Kociemba...' : 'Next'}
			</button>
			{errorMsg && <div className="error__info" style={{color: 'orange', marginTop: '10px'}}>{errorMsg}</div>}
			{movesNum > 0 && <div className="moves__info">Solution: {movesNum} moves</div>}
		</div>
	);
}