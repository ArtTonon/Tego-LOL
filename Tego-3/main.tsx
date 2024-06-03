import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context";
import { UserProvider } from "./userContext";
import Home from "./pages/index.jsx";
import Gameplay from "./pages/gameplay.jsx";
import Bio from "./pages/bio.jsx";
import Story from "./pages/story.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Gameplay />} path="/gameplay" />
            <Route element={<Bio />} path="/bio" />
            <Route element={<Story />} path="/story" />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
