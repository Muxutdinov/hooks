import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

const App = () => {
  const PlusMinus = (n) => {
    console.log(n);
    return n + n;
  };

  const Changed = useMemo(() => {
    return {
      color: toggle ? "crimson" : "green",
    };
  }, [toggle]);

  const [counter, setCounter] = useState(8);
  const [toggle, setToggle] = useState(false);

  const pm = useMemo(() => {
    return PlusMinus(counter);
  }, [counter]);

  useEffect(() => {
    console.log("Color changed");
  }, [toggle]);

  return (
    <div className="container">
      <div className="box">
        <h1 style={{ Changed }}>Counter: {pm}</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Delete</button>
        <button onClick={() => setToggle(!toggle)}>Toggle text</button>
      </div>
    </div>
  );
};

export default App;
