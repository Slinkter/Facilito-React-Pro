import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  useImperativeHandle(ref, () => ({ search, setSearch }));

  useEffect(() => {});

  return (
    <div ref={ref}>
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
});
Navbar.displayName = "Navbar";

export default Navbar;
