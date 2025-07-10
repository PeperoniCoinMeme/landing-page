import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import "@/styles/hero-text.css";
import "@/styles/hero-img.css";
import "@/styles/frames.css";
import "@/styles/buttons.css";
import "@/styles/fonts.css";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
