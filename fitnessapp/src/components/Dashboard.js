import React, { useState } from 'react';
import  "./Dashboard.css"
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaApple,
    FaElementor,
    FaBookOpen,
    FaAppleAlt,
    FaChartBar,
    FaInfoCircle,
    FaQuestionCircle,
    FaRupeeSign,
    FaTasks,
    FaStarOfDavid

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Dashboard = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Diary",
            icon:<FaBookOpen/>
        },
        {
            path:"/analytics",
            name:"Trends",
            icon:<FaChartBar/>
        },
        {
            path:"/comment",
            name:"Foods",
            icon:<FaAppleAlt/>
        },
        {
            path:"/comment",
            name:"Settings",
            icon:<FaStarOfDavid/>
        },
        {
            path:"/product",
            name:"Plans",
            icon:<FaTasks/>
        },
        {
            path:"/productList",
            name:"Help",
            icon:<FaQuestionCircle/>
        },
        {
            path:"/productList",
            name:"About",
            icon:<FaInfoCircle/>
        }
    ]
    return (
      <>
      <nav className='navbardashboard'></nav>
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <img style={{display: isOpen ? "block" : "none"}} className="logo"
                    src="https://pbs.twimg.com/profile_images/1592222954511036416/SVdQXs1O_400x400.jpg" />
                   <div style={{marginLeft: isOpen ? "90px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default Dashboard;