import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Pavel from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>Privet</p>
    <Pavel />
  </StrictMode>
);
