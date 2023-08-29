import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";

console.log.apply(console, [
    "%c Designed & Built by Federico Gentili ",
    "background: #647c64; color: #f1f1f1; padding:5px 0; border-radius: 5px; font-weight: bold;",
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <Router>
                <ScrollToTop />
                <App />
            </Router>
        </NextUIProvider>
    </React.StrictMode>
);
