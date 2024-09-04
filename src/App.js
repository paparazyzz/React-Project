import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
