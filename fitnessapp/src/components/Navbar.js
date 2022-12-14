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
    return(
        <>
        <nav className="navbar">
<Link className="navbar-logo">FITNESS CARE</Link>
<div className="menu-icon" onClick={handleclick}>
{/* navbar icon */}
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>

<ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li
            className='nav-item' >
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
            <Link to='/forums' className='nav-links' onClick={closeMobileMenu}>
              Forums
            </Link>
          </li>

          <li>
            <Link
              to='/about'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
        <Button />
        </nav>
        </>
    )
}

export default Navbar