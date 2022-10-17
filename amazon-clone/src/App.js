import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link }
from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/checkout" element={<Checkout/>}/>  
          <Route path="/" element={<Home/>}/>  
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
