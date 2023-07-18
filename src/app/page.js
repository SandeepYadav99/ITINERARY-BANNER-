import React from "react";
import Banner from "./components/Banner/Banner";
import Dashboard from "@/app/components/Home/Home";
import Dashboard2 from "@/app/components/Home/Home4";
import HotalDetails from "./components/Home/Hotals";
import HotalDetails4 from "./components/Home/Hotals4";
import Footer from "./components/Home/Footer";

const Home = () => {
  return (
    <div className="h-auto">
      <Banner />
      <Dashboard />
      <HotalDetails /> 
      <Dashboard2 />
      <HotalDetails4 />
      <Footer />
    </div>
  );
};

export default Home;
