# 🧩 Rubik’s Cube Solver

A **React-based 3D Rubik’s Cube Simulator and Solver** that visually demonstrates the cube-solving process using the **Kociemba Algorithm** and **CSS 3D Transformations**.  
Users can input cube colors, view 3D animations, and observe each solving step interactively.

---

## 🚀 Features
- 🎮 Interactive **3D Cube Visualization**
- 🧠 **Automated Solving** using the Kociemba Algorithm
- 💡 **Step-by-step Move Animation** (Next / Previous / Repeat)
- 🖱️ Smooth 3D rotation and user controls
- ⚙️ Validation for invalid or unsolvable inputs
- 🌈 Custom color input for all 6 faces

---

## 🛠️ Tech Stack
- **React.js (Vite)**
- **JavaScript (ES6+)**
- **CSS3 3D Transformations**
- **HTML5**

---

## 🧮 How It Works
1. User inputs cube colors or a scrambled state.
2. The system validates and converts it into a **mathematical cube state**.
3. The **Kociemba Algorithm** computes an optimized two-phase solution:
   - Phase 1 → Reduces cube to a simpler form (G₀ → G₁)
   - Phase 2 → Solves cube completely (G₁ → G₂)
4. Each move is animated using **CSS 3D transformations** (`rotateX`, `rotateY`, `translateZ`, `perspective`).
5. Users can **play, pause, or repeat** steps to visualize the solving process.

---

##📂 Folder Structure
```bash
|   .gitignore
|   index.html
|   package-lock.json
|   package.json
|   vite.config.js
+---public
|       vite.svg
|       
\---src
    |   App.css
    |   App.jsx
    |   index.css
    |   main.jsx
    |   
    +---assets
    |       react.svg
    |       
    \---components
        +---face_set
        |       face.css
        |       face.jsx
        |       index.jsx
        |       style.css
        |       
        +---positioning
        |       3D_axis.png
        |       cube_position.png
        |       index.jsx
        |       style.css
        |       
        +---solver
        |       index.jsx
        |       script.js
        |       style.css
        |       
        \---start_page
                3dblue_bg.jpeg
                3dorange_bg.jpeg
                3dpink_bg.jpeg
                cube.css
                cube.jsx
                cube_start.png
                index.jsx
                style.css  
```


---

## ⚙️ Installation and Setup

```bash
# Clone the repository
git clone https://github.com/SwarupanandDeshmukh/Rubiks-Cube-Solver.git

# Navigate into the folder
cd Rubiks-Cube-Solver

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Demo
Try It Yourself: https://my-rubiks-cube-solver.vercel.app/

---

## 🧠 Future Enhancements
- 📸 Image Recognition using OpenCV for color detection from real cube images.
- 🤖 AI-based Solver Optimization using Reinforcement Learning.
- 🌐 WebGL Integration for advanced 3D rendering.
- 🔊 Audio feedback and haptic effects for an interactive learning experience.
