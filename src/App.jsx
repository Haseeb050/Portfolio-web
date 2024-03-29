import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experince from "./component/Experince/Experince";
import Services from "./component/Services/Services";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimoniles from "./component/Testimoniles/Testimoniles";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div id="body">
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Testimoniles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
