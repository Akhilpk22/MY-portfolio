import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
