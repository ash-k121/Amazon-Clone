import { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      <header className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <a
          className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:opacity-80 transition-opacity`}
          href="https://emergent.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
            alt="Logo"
            className="rounded-full shadow-lg"
          />
        </a>
        <p className="mt-5 text-2xl font-semibold">Building something incredible ~!</p>
        <div className="mt-8 p-6 rounded-lg shadow-lg bg-opacity-90 max-w-md text-center 
          dark:bg-dark-surface bg-gray-100 transition-colors duration-300">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-dark-text' : 'text-gray-800'}`}>
            Theme Demonstration
          </h2>
          <p className={`mb-4 ${darkMode ? 'text-dark-secondary' : 'text-gray-600'}`}>
            This application now features a dark mode toggle in the top-right corner. 
            Click it to switch between light and dark themes!
          </p>
          <div className={`p-3 rounded ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} mb-4`}>
            <code>Theme preference is saved in localStorage</code>
          </div>
          <p className={`text-sm ${darkMode ? 'text-dark-secondary' : 'text-gray-500'}`}>
            The theme will also automatically match your system preferences if you haven't set a preference yet.
          </p>
        </div>
      </header>
    </div>
  );
};

// Main App component wrapped with ThemeProvider
function AppWithTheme() {
  return (
    <div className="App">
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Root component that provides theme context
function App() {
  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

export default App;
