import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Portal from "./Portal.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App className="h-auto w-full " />
      <Portal className="bg-red-500"></Portal>
    </StrictMode>
  </BrowserRouter>,
  document.getElementById("portal_root")
);
