import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import Buy from './Components/Buy'

function App() {
  const toggleNav = () => {
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    navbarLinks.classList.toggle('active')
  }
  
  


  return (
  <Router> 
    <div className="App">
      <Navbar onToggle = {toggleNav}/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </div>
  </Router> 
  );
}

export default App;
