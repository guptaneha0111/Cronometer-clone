
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AllRoutes from './components/Routes/AllRoutes';



function App() {
  return (
  <div>
    <AllRoutes/>
    <Navbar/>
    <Home/>
    <Footer/>
  </div>
  );
}

export default App;
