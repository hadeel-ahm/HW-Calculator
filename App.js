
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {NavBar} from './Components/NavBar'
import {C} from './pages/Calculator'
import {About} from './pages/About'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
    <Routes>
    <Route exact path="/Calculator" element={<C/>}></Route>
    <Route path="/About" element={<About/>}></Route>
     
    </Routes>
  </Router>
    
    </>
  );
}

export default App;
