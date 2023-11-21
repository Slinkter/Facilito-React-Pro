import { useState } from "react";
import React from "react";

import Navbar from "./Components/Navbar";
import Events from "./Components/Events";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Navbar />
      <Events />
    </React.Fragment>
  );
}

export default App;
