import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import Buy from './Components/Buy'
import SellForm from './Components/SellForm'
import PublishForm from './Components/PublishForm'
import Stats from './Components/Stats'

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
        <Route path="/website" exact element={<Shop />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/publish" element={<PublishForm />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  </Router> 
  );
}

export default App;
