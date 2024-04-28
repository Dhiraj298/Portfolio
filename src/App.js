// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
// import { Projects } from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      {/* <Projects></Projects> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
