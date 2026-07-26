import { createRoot } from "react-dom/client";
import App from "./App";
import "../vendor/fonts/1.0.0/fonts.css";
import "./styles.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
