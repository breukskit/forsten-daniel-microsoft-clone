import React from "react";
import { Nav } from "./components/Nav/Nav";
import { navLayoutContext } from "./components/Nav/NavLayoutContext";
import { useWindowWidth } from "./useWindowWidth";

function App() {
  const viewPort = useWindowWidth();
  return (
    <div className="App">
      <navLayoutContext.Provider value={{ viewPort }}>
        <Nav />
      </navLayoutContext.Provider>
    </div>
  );
}

export default App;
