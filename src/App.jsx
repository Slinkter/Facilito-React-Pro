import { useState } from "react";
import React from "react";

import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const arrayObj = [
    { id: 1, name: "Mauricio", age: 25 },
    { id: 2, name: "Lolo", age: 15 },
    { id: 3, name: "Marco", age: 10 },
    { id: 4, name: "Angelo", age: 5 },
  ];

  const items = numbers.map((item) => (
    <li key={`array-number-item${item}`}>{item}</li>
  ));

  const peopleItems = arrayObj.map((person) => {
    return <li key={`array-person-item-${person.id}`}> {person.name}</li>;
  });

  console.log(items);

  return (
    <React.Fragment>
      <Navbar />

      <ul>{items}</ul>
      <ul>{peopleItems}</ul>
    </React.Fragment>
  );
}

export default App;
