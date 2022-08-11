import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Headers from "./components/Headers";
import Buscador from "./components/Buscador";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Cancion from "./pages/Cancion";

function App() {
  //variables de estados
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs"));
  const [mySongs, setMySongs] = useState(mySongsInit);
  let serchInit = {
    artist: "",
    song: "",
    req: false,
  };
  const [serch, setSerch] = useState(serchInit);
  const [error, setError] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  return (
    <BrowserRouter>
      <CssBaseline>
        <div className="App">
          <Headers />
          <main className="App-main">
            <Routes>
              <Route
                path="/"
                element={
                  <Buscador
                    serch={serch}
                    setSerch={setSerch}
                    setError={setError}
                  />
                }
              />

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
