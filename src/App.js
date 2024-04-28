import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeeMore from './components/SeeMore';

const App = () => {
  return (
    <Router>
      <NavBar /> {/* NavBar is placed outside of Routes */}
      
      <Routes> 
        <Route  path="/" element={<LandingPage />} />
        <Route path='/seemore' element={<SeeMore/>}/>
      </Routes>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer /> {/* Footer is placed outside of Routes */}
    </Router>
  );
}

export default App;
