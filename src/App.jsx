import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskManager from "./pages/TaskManager.jsx";
import PostsPage from "./pages/PostsPage.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <h1 className="font-bold text-xl">React + Tailwind App</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Tasks</Link>
            <Link to="/posts" className="hover:underline">Posts</Link>
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </div>

        <footer className="text-center py-4 border-t mt-10 text-sm text-gray-500">
          © 2025 React Tailwind Project
        </footer>
      </div>
    </Router>
  );
}

export default App;
