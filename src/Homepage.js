import React from "react";
import { Router, Link } from "@reach/router";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel/Carousel";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Carousel className="carousel" />
      <SearchBar />
    </div>
  );
};

export default Homepage;
