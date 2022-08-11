import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Cancion from "./pages/Cancion";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <div className="App">
          <Headers />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cancion/:id" element={<Cancion />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
