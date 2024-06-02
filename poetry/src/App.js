// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Poems from './components/Poems';
import Albums from './components/Albums';
import Profile from './components/Profile';
import SpecificProfile from './components/SpecificProfile';
import Poem from './components/Poem';
import Album from './components/Album';
import Home from './components/Home';

import UploadPoems from './components/UploadPoems';
import UploadAlbum from './components/UploadAlbum';
import Autocomplete from './components/AutoComplete';


import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router basename="/poetry">
        <div>
          <Navbar />
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  {/* <Route path="/logout" element={<Logout />} /> */}
                  <Route path="/poems" element={<Poems />} />
                  <Route path="/poems/:poemId" element={<Poem />} />
                  <Route path="/albums" element={<Albums />} />
                  <Route path="/albums/:albumId" element={<Album />} />
                  <Route path="/profile/:inUserId" element={<SpecificProfile />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/uploadpoem" element={<UploadPoems />} />
                  <Route path="/uploadalbum" element={<UploadAlbum />} />
                  <Route path="/auto" element={<Autocomplete words={["Alom", "Boldogsag", "Egyedulallo", "Ido", "Szerelem"]}/>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
