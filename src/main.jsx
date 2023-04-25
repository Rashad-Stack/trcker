import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
