# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

##Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🧩 Task Manager & Posts Page (React + Vite Project)

This project is a simple web application built using **React** and **Vite**. It demonstrates routing, state management, and component-based architecture using modern React practices.  
It includes two main pages:
- **Task Manager** – A page to add, delete, and manage daily tasks.
- **Posts Page** – A sample page to display posts from a local array or API.

---

🧠 Project Overview

The goal of this assignment is to build a minimal **React project** that demonstrates:
- Component reusability.
- Client-side routing with **React Router DOM**.
- State management using React Hooks (`useState`).
- Clean UI layout using Tailwind CSS.

---

## 📁 Project Structure
- File strucmy-react-app/
│
├── src/
│ ├── pages/
│ │ ├── TaskManager.jsx # Handles tasks creation and deletion
│ │ └── PostsPage.jsx # Displays example posts
│ │
│ ├── App.jsx # Main app component with routing
│ ├── main.jsx # App entry point
│ ├── index.css # Tailwind & custom styles
│ └── assets/ # Optional folder for images/icons
│
├── package.json
├── vite.config.js
└── README.mdturing in React.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

git clone https://github.com/your-username/my-react-app.git
cd my-react-app

2. Install Dependencies
npm install

3. Run the Application
npm run dev

4. Open in Browser
Once the server starts,
http://localhost:5173/

🧩 Features
✅ Task Manager

Add new tasks using an input field.

Delete tasks when completed.

Automatically updates the list using React state.

📰 Posts Page

Displays a list of posts (static data or fetched from an API).

Clean layout using Tailwind.

Demonstrates routing between pages.

🧭 Navigation

The application uses React Router DOM for page navigation.
Example routes:

Route	Description
/	Task Manager Page
/posts	Posts Page

You can navigate using the navbar links.

💅 Styling

The project uses Tailwind CSS for styling.
If you ever need to reinstall Tailwind, run:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Then configure tailwind.config.js and import Tailwind directives in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🧰 Tech Stack
Tool	Purpose
React	Frontend library
Vite	Development server and bundler
Tailwind CSS	Utility-first CSS framework
React Router DOM	Routing between pages
Node.js & NPM	Dependency management

🧪 Example Task Manager Code
import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="border p-2 rounded w-full"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between p-2 bg-gray-100 mb-2 rounded">
            {task}
            <button
              onClick={() => deleteTask(index)}
              className="text-red-600 font-semibold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;



