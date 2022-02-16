import React, { useState, useMemo } from "react";
import "./App.css";

function sum(n) {
  console.log(n);
  return n + n;
}
const App = () => {
  const [num, setNum] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  useMemo(() => {
    sum(num);
  }, [num]);

  return (
    <div className="container">
      <div
        className="box"
        style={{ color: isGreen ? "green" : "red" }}
        onClick={() => setIsGreen(!isGreen)}
      >
        <h1>Title</h1>
        <h1>Text</h1>
      </div>
      {num}
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default App;
