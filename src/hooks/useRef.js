import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(1);
  const [value, setValue] = useState("");
  const pastValue = useRef("");
  const ref = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    ref.current++;
  });

  useEffect(() => {
    pastValue.current = pastValue;
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Counter: {ref.current}</h1>
        <h1>PastValue: {pastValue}</h1>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={focus}>focus</button>
      </div>
    </div>
  );
};

export default App;
