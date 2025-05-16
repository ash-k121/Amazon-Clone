import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Initialize dark mode based on stored preferences or system preference
// This helps prevent flash of wrong theme on page load
function initializeDarkMode() {
  // Check localStorage preference
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme !== null) {
    if (savedTheme === 'true') {
      document.documentElement.classList.add('dark');
    }
    return;
  }
  
  // If no stored preference, check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
}

// Run initialization before rendering
initializeDarkMode();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
