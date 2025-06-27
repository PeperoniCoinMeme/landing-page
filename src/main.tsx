import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/fonts.css";
import "@/styles/index.css";
import "@/styles/hero-text.css";
import "@/styles/hero-img.css";
import "@/styles/frames.css";
import "@/styles/buttons.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
