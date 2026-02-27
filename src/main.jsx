import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import "./global.css";

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
    <App />
  </BrowserRouter>
);