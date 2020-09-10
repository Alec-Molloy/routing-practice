import React from 'react';
import { Router, Link } from "@reach/router";
import './App.css';
import Home from './components/Home'
import Number from './components/Number'
import Colors from './components/Colors'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Number path="/:num"></Number>
        <Colors path="/:word/:color/:colour"></Colors>
      </Router>
    </div>
  );
}

export default App;
