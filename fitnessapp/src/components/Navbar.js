import React, {useState} from "react";
import {Button} from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar()
{
    const [click, setClick]= useState(false);

    const handleclick = ()=>setClick(!click)
    return(
        <>
        <nav className="navbar">
<Link className="navbar-logo">FITNESS CARE</Link>
<div className="menu-icon" onClick={handleclick}>
{/* navbar icon */}
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>
        </nav>
        </>
    )
}

export default Navbar