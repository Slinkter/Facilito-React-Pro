import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Events from "../../Components/Events";

const Home = () => {
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
};

export default Home;
