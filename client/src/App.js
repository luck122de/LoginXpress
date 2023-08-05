import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Singup from './components/Singup';
import { Routes,Route } from 'react-router-dom';


const App = () => {
  return (
   <>
 <Navbar/>
 <Routes>
 <Route  path="/" element={<Home/>}/>
 <Route  path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/> 
 <Route  path="/login" element={<Login/>}/> 
 <Route  path="/singup" element={<Singup/>}/> 
 </Routes>
   </>
  )
}

export default App
