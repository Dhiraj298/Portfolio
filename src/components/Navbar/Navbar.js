import {React , useState} from 'react'
import './navbar.css'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(true);
    const additionalClassName = menuOpen ? 'menuOpen' : '';
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <div className='menuBtn' 
        onClick={() => setMenuOpen(!menuOpen)}>
        {
          menuOpen? 
          <FiX/> :
          <FiMenu/>  
        } 
        </div>
        <ul 
          className={`menuItems ${additionalClassName}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li>
            <a href="#projects">Projects</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar