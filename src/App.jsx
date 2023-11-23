import { useState, useEffect, useRef } from "react";
import React from "react";

import Navbar from "./Components/Navbar";
import Events from "./Components/Events";

import "./App.css";

function App() {
  const [seachTerm, setSeachTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    console.log(containerRe.current);
    setSeachTerm(term);
  };

  console.log(seachTerm, 10);

  return (
    <React.Fragment>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={seachTerm} />
    </React.Fragment>
  );
}

export default App;
