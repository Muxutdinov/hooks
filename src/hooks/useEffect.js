import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, [type]);
  return (
    <div className="container">
      <div className="box">
        {/* <button onClick={() => setType("users")}>users</button> */}
        {/* <button onClick={() => setType("posts")}>posts</button> */}
        {/* <button onClick={() => setType("todos")}>todos</button> */}
        <pre>{JSON.stringify(position, null, 2)}</pre>
      </div>
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </div>
  );
};

export default App;
