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

## Folder Structure
```bash
Rubiks-Cube-Solver/
├── public/
├── src/
│   ├── components/
│   │   ├── FaceSet.jsx
│   │   └── Face.jsx
│   ├── style.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
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
Have a look at the solution - https://youtu.be/OY_3BpIYZG8?si=JE6ibJgWwylpntmv

---

## 🧠 Future Enhancements
- 📸 Image Recognition using OpenCV for color detection from real cube images.
- 🤖 AI-based Solver Optimization using Reinforcement Learning.
- 🌐 WebGL Integration for advanced 3D rendering.
- 🔊 Audio feedback and haptic effects for an interactive learning experience.
