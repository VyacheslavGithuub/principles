import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./mainLayout/mainLayout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
