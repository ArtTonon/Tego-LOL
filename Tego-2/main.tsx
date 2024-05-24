import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context";
import { UserProvider } from "./userContext";
import HomePage from "./pages/home";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
