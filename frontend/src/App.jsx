import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter alias
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Home/Hero';
import HomeStats from './components/Home/HomeStats';
import LogoSlider from './components/Home/LogoSlider';
import Footer from './components/Home/Footer';
import JobSeekers from './components/Home/JobSeekers';
import HomeRecruiters from './components/Home/HomeRecruiters';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <HomeStats/>
      <LogoSlider/>
      <JobSeekers/>
      <HomeRecruiters/>
      <Footer/>
    </Router>
  );
}

export default App;
