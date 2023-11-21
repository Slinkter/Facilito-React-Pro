import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [anddress, setAnddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleClearClick = () => {
    console.log("Clear");
  };

  const handleFormSubmit = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>Age</span>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>Address</span>
        <input
          type="text"
          value={anddress}
          onChange={(e) => setAnddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>ZidCode</span>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>Phone</span>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
