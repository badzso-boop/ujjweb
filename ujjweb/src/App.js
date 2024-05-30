import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const App = () => {
  return (
    <Router basename="/ujjweb">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" exact element={<Home></Home>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
