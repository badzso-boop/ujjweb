import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CV from "./Pages/CV";
import References from "./Pages/References";
import About from "./Pages/About";

const App = () => {
  return (
    <Router basename="/ujjweb">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/references">References</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/cv" element={<CV></CV>} />
          <Route path="/references" element={<References></References>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
