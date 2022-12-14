import React, {useState} from "react";
import {Button} from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar()
{
    const [click, setClick]= useState(false);
    const [dropdown, setDropdown] = useState(false)

    const handleclick = ()=>setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    return(
        <>
        <nav className="navbar">
        <Link className="navbar-logo">FITNESS</Link>
<div className="icimg">
  <img src="https://static.vecteezy.com/system/resources/previews/005/696/625/non_2x/fitness-care-logo-healthy-food-logo-vector.jpg"/></div>
  
<div className="menu-icon" onClick={handleclick}>
{/* navbar icon */}
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>

<ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li
            className='nav-item' 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/support'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Support
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>

          
          
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          
<li>
          <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />
        </nav>
        </>
    )
}

export default Navbar