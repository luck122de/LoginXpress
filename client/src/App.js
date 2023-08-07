import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Singup from './components/Singup';
import { Routes,Route } from 'react-router-dom';
import "./App.css";
import Errorpage from './components/Errorpage';

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
 <Route path='*' element={<Errorpage />} />
 </Routes>
   </>
  )
}

export default App
