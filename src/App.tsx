import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Partners from "./Partners";
import MadeFor from "./MadeFor";
import Areas from "./Areas";
import Testimonial from "./Testimonial";
import BannerGroup from "./BannerGroup";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Banner /> */}
      <Partners />
      <MadeFor />
      <Areas />
      <Testimonial />
      <BannerGroup />
      <Footer />
    </div>
  );
};

export default App;
