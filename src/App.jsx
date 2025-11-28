// import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./componet/Home";

function App() {
  // const [count, setCount] = useState(0);
  // const [btnClick, setBtnClick] = useState(0);

  // useEffect(() => {
  //   console.log("hello");
  // }, [count]);

  // useEffect(() => {
  //   const userData = {
  //     firstName: "bansi",
  //     lastName: "chudasama",
  //     city: "xyz",
  //   };

  //   localStorage.setItem("useData", JSON.stringify(userData));
  //   localStorage.setItem("Token", "hello");
  //   localStorage.setItem("count", count);
  // });

  // useEffect(() => {
  //   if (btnClick) {
  //     localStorage.getItem("userData");
  //     localStorage.getItem("Token");
  //   }
  // },[btnClick])
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setBtnClick((count) => count + 1)}>
          count is {btnClick}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
     
    </>
  );
}

export default App;