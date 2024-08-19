import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import Header from './components/header/Header';
import HeaderRoutes from './components/header/HeaderRouter';
function App() {
  return (
    <Router>
   <Header/>
   <HeaderRoutes />
   </Router>
  );
}

export default App;