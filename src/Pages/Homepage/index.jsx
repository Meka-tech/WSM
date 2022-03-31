import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Slider from "../../Components/Slider";
import Tab from "../../Components/Tabs";
import { carouselItem } from "../../Data";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Slider item={carouselItem} />
      <Tab />
      <Footer />
    </div>
  );
};

export default Homepage;
