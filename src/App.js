import React from "react";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import DonateButton from "./components/DonateButton";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import LinkedIn from "./components/LinkedIn";
import Twitter from "./components/Twitter";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="image">
      <div className="navbar">
        <div className="logo" />
        <div className="links-hdrs">
          <Home />
          <AboutUs />
          <Donate />
          <Facebook />
          <Instagram />
          <LinkedIn />
          <Twitter />
          <Info />
        </div>
      </div>
      <main className="content">
        <DonateButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
