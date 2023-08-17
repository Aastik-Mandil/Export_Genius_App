import React from "react";
import TopStripe from "./components/TopStripe";
import Navbar from "./components/Navbar";
import BannerBox from "./components/BannerBox";
import About from "./components/About";
import OurServices from "./components/OurServices";
import Guide from "./Guide";
import Careers from "./components/Careers";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopStripe />

      <Navbar />

      <BannerBox />

      <About />

      <OurServices />

      <Guide />

      <Careers />

      <Client />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
