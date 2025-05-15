import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initDebug } from "./utils/debug";

// Renderiza o aplicativo
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Executa verificações de debug em desenvolvimento
if (import.meta.env.DEV) {
  // Iniciar debug após montagem completa do aplicativo
  window.addEventListener("load", () => {
    initDebug();
  });
}
