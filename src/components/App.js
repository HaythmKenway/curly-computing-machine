import logo from '../images/logo.png';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Nav from './navbar'
import Button from 'react-bootstrap/Button';
import Sliders from './caurosel';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Sliders/>    
  
    </div>
    
  );
}

export default App;
