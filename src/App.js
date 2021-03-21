import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/services" component={Services} exact />
      </BrowserRouter>
    </>
  );
};

export default App;
