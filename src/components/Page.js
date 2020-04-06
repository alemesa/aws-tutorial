import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";

import ClassicPic from "../components/asterix-classic.png";
import BannerPic from "../components/asterix-banner.webp";

import "./Page.scss";

function Page() {
  return (
    <Router>
      <div className="Page">
        <Sidebar />

        <div className="content-container">
          <Switch>
            <Route path="/caesar">
              <Part1 />
            </Route>
            <Route path="/cleopatra">
              <Part2 />
            </Route>
            <Route path="/olympic">
              <Part3 />
            </Route>
            <Route path="/britannia">
              <Part4 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Page;

function Home() {
  return (
    <div className="Content">
      <h2>HomePage</h2>
      <img src={ClassicPic} alt="" />
    </div>
  );
}

function Part1() {
  return (
    <div className="Content">
      <h2>Part 1</h2>
      <img src={BannerPic} alt="" />
    </div>
  );
}

function Part2() {
  return <div className="Content">Part 2</div>;
}

function Part3() {
  return <div className="Content">Part 3</div>;
}

function Part4() {
  return (
    <div className="Content">
      Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part
      4Part 4Part 4Part 4Part 4
    </div>
  );
}
