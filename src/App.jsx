import { useState, useEffect } from "react";
import React from "react";

import Navbar from "./Components/Navbar";
import Events from "./Components/Events";

import "./App.css";

function App() {
  const [seachTerm, setSeachTerm] = useState("");

  const handleNavbarSearch = (term) => {
    setSeachTerm(term);
  };

  console.log(seachTerm, 10);

  return (
    <React.Fragment>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={seachTerm} />
    </React.Fragment>
  );
}

export default App;
