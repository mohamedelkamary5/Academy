import React from "react";
import "./App.scss";
import CountTop from "./../src/Components/CountTop";
import Navbar from "./../src/Components/Navbar";
import About from "./../src/Components/About";
import Feauter from "./../src/Components/Feauter";

import Courses from "./../src/Components/Courses";
import Subscribe from "./../src/Components/Subscribe";
import Customers from "./../src/Components/Customers";
import Technololgies from "./../src/Components/Technololgies";
import Footer from "./../src/Components/Footer";

function App() {
  return (
    <div className="App">
      <CountTop />
      <Navbar />
      <About />
      <Feauter />
      <Courses />
      <Subscribe />
      <Customers />
      <Technololgies />
      <Footer />
    </div>
  );
}

export default App;
