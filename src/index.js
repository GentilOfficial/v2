import * as ReactDOMClient from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/index.css";
import ScrollToTop from "./hooks/ScrollToTop";
import App from "./App";

console.log.apply(console, [
    "%c Designed & Built by Federico Gentili ",
    "background: #548267; color: #22352a; padding:5px 0; border-radius: 5px; font-weight: bold;",
]);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <NextUIProvider>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </NextUIProvider>
);
