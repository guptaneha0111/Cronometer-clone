import React, { useState } from 'react';
import {NavDropdown, Nav, Navbar, DropdownButton, Dropdown} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
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
    FaStarOfDavid,
    FaAngleDown

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

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
            path:"/Diary",
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
            path:"/about",
            name:"About",
            icon:<FaInfoCircle/>
        }
    ]
    const navigate= useNavigate();
    let useremail = (localStorage.getItem("email"));
console.log("email:",useremail);
// const values=document.getElementById("emailvalue")
// values.innertext=useremail.email
function logoutfun()
{
    localStorage.clear();
    navigate("/")
}
    return (
      <>
      <nav className='navbardashboard'>
        <DropdownButton title={useremail} className='mainnav'>
                <Dropdown.Item onClick={logoutfun}>logout</Dropdown.Item>
                </DropdownButton>
             </nav>
      
        <div className="container">
            <div>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <img style={{display: isOpen ? "block" : "none"}} className="logo"
                    src="https://pbs.twimg.com/profile_images/1592222954511036416/SVdQXs1O_400x400.jpg" />
                   <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
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
           <div>
           
           <h1 className='dashboardh1'>Your Dashboard</h1> 
           {/* <div className='secondnav'><nav >
            <h1>Quick Add to Diary</h1>
            <div className='flexdiv'>
                <button><img src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"/>Food</button>
            </div>
            </nav></div> */}
           <div className='chartdiv'>
            <div className='imgdiv shadowd'>
                <img className='imgchart' src="https://braze-images.com/appboy/communication/marketing/content_cards_message_variations/images/6387dbe55fa90006644e5da0/60332a91ff2dcf89826899ec893b847b0bb32868/original.png?1669856169"/>
           <h1 className='h1text'>Discovering Nutrition Podcast: Ep. 8<br/>
In light of Diabetes Awareness Month in November, <br/>
we recently chatted to Robby Barbaro of Mastering Diabetes. <br/>
Catch the conversation with our latest podcast episode.</h1>
<button className='buttonlisten'>Listen Now</button>
            </div>
            <div className='shadowd imgchart'>
                <img className='imgchart imgchart1' src="https://www.wholefoodsplantbasedhealth.com.au/wp-content/uploads/2013/01/Energy-density-2017-e1483402697768.jpg"/>
            </div>
           </div>

<div className='chartdiv'>
           <div className='imgdiv shadowd'>
            <img className='imgchart' src="https://assets-global.website-files.com/5dc45139b3f0c9259aecd32b/5dc45139b3f0c94ccbecd79a_Fasting-Urine-Nitrogen%402x.jpeg"/>
           </div>
           </div>
           </div>
        </div>
        
        </>
    );
};

export default Dashboard;