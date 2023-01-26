import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
      </Router>
    </>    
  );
}

export default App;
