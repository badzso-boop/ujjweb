import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CV from "./Pages/CV";
import References from "./Pages/References";
import About from "./Pages/About";

import Nav from "./Components/Navbar";

const App = () => {
  return (
    <div className="h-screen overflow-hidden p-3">
      <Router basename="/ujjweb">
        <div className="flex flex-col h-full overflow-y-scroll">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/references" element={<References />} />
          </Routes>
          <Nav />
        </div>
      </Router>
    </div>
  );
};

export default App;
