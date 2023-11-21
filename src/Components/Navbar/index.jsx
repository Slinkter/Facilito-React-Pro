import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  console.log(search);
  return (
    <div>
      <p>Mi Boletera </p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputDown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
