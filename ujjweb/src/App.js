import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import References from "./Pages/References";
import About from "./Pages/About";
import Skillset from "./Pages/Skillset";

import Nav from "./Components/Navbar";

const App = () => {
  return (
    <div className="h-screen overflow-hidden p-2">
      <I18nextProvider i18n={i18n}>
        <Router basename="/ujjweb">
          <div className="flex flex-col h-full overflow-y-scroll no-gorgo">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/references" element={<References />} />
              <Route path="/skillset" element={<Skillset />} />
            </Routes>
            <Nav />
          </div>
        </Router>
      </I18nextProvider>
    </div>
  );
};

export default App;
