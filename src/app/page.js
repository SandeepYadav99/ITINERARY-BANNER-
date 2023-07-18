import React from "react";
import Banner from "./components/Banner/Banner";
import Dashboard from "@/app/components/Home/Home";
import HotalDetails from "./components/Home/Hotals";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Dashboard />
      <HotalDetails />
    </div>
  );
};

export default Home;
