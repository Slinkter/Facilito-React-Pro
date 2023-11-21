import { useState } from "react";
import React from "react";

import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import SignupForm from "./components/SignupForm";

import "./App.css";

function App() {
  const [seachTerm, setSeachTerm] = useState("");

  const handleNavbarSearch = (term) => {
    setSeachTerm(term);
  };

  console.log(seachTerm, 10);

  return (
    <React.Fragment>
      {/*   <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={seachTerm} /> */}

      <SignupForm />
    </React.Fragment>
  );
}

export default App;
