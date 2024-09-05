import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
};

export default App;
