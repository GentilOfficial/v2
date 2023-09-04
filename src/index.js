import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/index.css";
import ScrollToTop from "./hooks/ScrollToTop";
import App from "./App";

console.log.apply(console, [
    "%c Designed & Built by Federico Gentili ",
    "background: #647c64; color: #f1f1f1; padding:5px 0; border-radius: 5px; font-weight: bold;",
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <NextUIProvider>
            <Router>
                <ScrollToTop />
                <App />
            </Router>
        </NextUIProvider>
    </StrictMode>
);
