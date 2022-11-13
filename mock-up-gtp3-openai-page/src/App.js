import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGTP3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
