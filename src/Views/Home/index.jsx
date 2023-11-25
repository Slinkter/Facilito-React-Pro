import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Events from "../../Components/Events";

import ReactPaginate from "react-paginate";
import style from "./Home.module.css";
import useEventsResults from "../../state/events-results";

const Home = () => {
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const events = data?._embedded?.events || [];
  const pageCount = data?.page || {};
  const [seachTerm, setSeachTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    setSeachTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ({ selected }) => {
    console.log(selected);
    fetchEvents(`&keyword=${seachTerm}&page=${selected}`);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderEvents = () => {
    if (isLoading) {
      return <div> Cargando resultado</div>;
    }
    if (error) {
      return <div> Cargando resultado</div>;
    }

    return (
      <div>
        <Events searchTerm={seachTerm} events={events} />
        <ReactPaginate
          className={style.pagination}
          nextClassName={style.nextgit}
          previousClassName={style.previous}
          pageClassName={style.page}
          breakLabel="..."
          nextLabel=" >"
          activeClassName={style.activePage}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount.totalPages}
          previousLabel="< "
          disabledClassName={style.disabledPage}
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </React.Fragment>
  );
};

export default Home;
