import React, { useEffect, useRef } from "react";

import "./App.css";

const App = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };
  const lastKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };
  const submitKeyDown = () => {
    alert("Form submitted successfully ");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use Ref</h1>
        <label>
          FirstName:
          <input
            ref={firstNameRef}
            type="text"
            placeholder="Enter your first name"
            onKeyDown={firstKeyDown}
          />
        </label>
        <label>
          LastName:
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Enter your last name"
            onKeyDown={lastKeyDown}
          />
        </label>
        <button ref={submitRef} type="submit" onKeyDown={submitKeyDown}>
          Submit
        </button>
      </header>
    </div>
  );
};

export default App;
