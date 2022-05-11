import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1> Single Page Application (SPA)</h1>
          <ul className="header">
            <li>
              <NavLink exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tarina">Story</NavLink>
            </li>
            <li>
              <NavLink to="/yhteys">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Koti/>} />
              <Route path="/tarina" element={<Tarina/>} />
              <Route path="/yhteys" element={<Yhteys/>} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
