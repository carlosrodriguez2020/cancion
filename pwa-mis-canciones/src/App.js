import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Headers from "./components/Headers";
import Buscador2 from "./components/Buscador2";
import Error404 from "./pages/Error404";
import Cancion from "./pages/Cancion";
import Letra from "./components/Letra";
import ListaCanciones from "./components/ListaCanciones";

function App() {
  //variables de estados
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs"));
  let [mySongs, setMySongs] = useState(mySongsInit);

  let serchInit = {
    artist: "",
    song: "",
    req: false,
  };
  const [serch, setSerch] = useState(serchInit);
  const [error, setError] = useState(false);
  const [currentSong, setCurrentSong] = useState({});

  const getData = async () => {
    const { artist, song } = serch;

    try {
      let apiArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        apiSong = `https://api.lyrics.ovh/v1/${artist}/${song}`,
        apiaRes = await fetch(apiArtist),
        songRes = await fetch(apiSong),
        artisJson = await apiaRes.json(),
        songJson = await songRes.json();

      setCurrentSong({
        artist: artisJson.artists[0].strArtist,
        avatar: artisJson.artists[0].strArtistThumb,
        song,
        lyrics: songJson.lyrics,
      });
    } catch (error) {
      setSerch({
        artist,
        song,
        req: false,
      });
      setError(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [serch]);

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
                  <>
                    <Buscador2
                      serch={serch}
                      setSerch={setSerch}
                      setError={setError}
                      getData={getData}
                    />
                    <Letra
                      currentSong={currentSong}
                      setMySongs={setMySongs}
                      mySongs={mySongs}
                      setCurrentSong={setCurrentSong}
                      setSerch={setSerch}
                    />
                  </>
                }
              >
                <Route
                  path="/listaCanciones"
                  element={
                    <ListaCanciones mySongs={mySongs} setMySongs={setMySongs} />
                  }
                />
                <Route
                  path="/cancion/:id"
                  element={<Cancion mySongs={mySongs} />}
                />
                <Route
                  path="/Letra"
                  element={
                    !serch.req ? null : (
                      <Letra
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        mySongs={mySongs}
                        setMySongs={setMySongs}
                        setSerch={setSerch}
                      />
                    )
                  }
                />
              </Route>

              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
