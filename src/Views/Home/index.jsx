import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Events from "../../Components/Events";
import useEventsData from "../../hook/useEventsData";

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [seachTerm, setSeachTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    setSeachTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={seachTerm} events={events} />
    </React.Fragment>
  );
};

export default Home;
