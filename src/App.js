import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel/Carousel";
import Homepage from "./Homepage";

const App = () => {
  return (
    <div>
      <h1>Note App</h1>
      {/* <Carousel />
      <SearchBar /> */}
      <Router>
        <Homepage path="/" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
