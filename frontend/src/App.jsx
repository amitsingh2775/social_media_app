import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Profile from './components/Profile';
import Signin from './components/signin';
import Home from './components/Home';
import CreatePost from './components/Createpost';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
            <Route path="/profile" element={<Profile />} ></Route>
            <Route path="/signin" element={<Signin />} ></Route>
            <Route path="/post-create" element={<CreatePost />} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
