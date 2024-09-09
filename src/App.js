import React from "react";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Skills from "./component/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
};

export default App;
