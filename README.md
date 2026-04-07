🎨 GraphHue – Graph Colouring Visualizer

An interactive web-based tool to create graphs and visualize graph colouring algorithms in real time. Built using React + Vite, GraphHue bridges the gap between graph theory concepts and practical visualization.

🚀 Live Demo

👉 https://graphhuee.vercel.app/

📌 Features
🟢 Click to create nodes dynamically
🔵 Click two nodes to create edges
🎨 Apply Greedy Graph Colouring Algorithm
📊 Displays Chromatic Number
⚡ Real-time updates using React state
🌙 Clean dark-mode UI with responsive layout
🧠 How It Works
User creates a graph using the canvas
Graph is converted into an Adjacency List
Greedy algorithm assigns colours such that:
No adjacent nodes share the same colour
Result is displayed visually on the graph
🧮 Algorithm Used
Greedy Graph Colouring
Assigns the smallest available colour to each vertex
Ensures no two adjacent vertices share the same colour

Time Complexity:

O(V²)
🏗️ Tech Stack
⚛️ React (Frontend)
⚡ Vite (Build Tool)
🎨 CSS (Styling)
📐 SVG (Graph Rendering)
📁 Project Structure
graph-hue/

├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── GraphVisualizer.jsx
│   ├── utils/
│   │   └── graphAlgorithms.js
│   └── styles/
│       └── graph.css

🛠️ Installation & Setup
# Clone the repository
git clone https://github.com/tanviedev/GraphHue.git

# Navigate into the folder
cd GraphHue

# Install dependencies
npm install

# Run development server
npm run dev
📦 Build for Production
npm run build
🌍 Deployment

This project can be deployed easily using:

Netlify
Vercel
🎯 Usage
Click anywhere on canvas → Create nodes
Click one node, then another → Create edge
Click "Color Graph" → Apply colouring
View:
Colored graph 🎨
Chromatic number 📊
🧪 Example Graphs to Try
Triangle → 3 colours
Square → 2 colours
Line graph → 2 colours
Complete graph → n colours
💡 Future Enhancements
🖱️ Drag-and-drop nodes
🎬 Step-by-step animation
🔁 Backtracking algorithm (optimal colouring)
💾 Save / load graph
📱 Mobile responsiveness
🙌 Author

Tanvi Takle
GitHub: https://github.com/tanviedev
