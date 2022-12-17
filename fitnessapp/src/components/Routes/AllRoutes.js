import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About";
import Blog from "../Blog";
import Dashboard from "../Dashboard";
import Login from "../Login";
import HomePageData from "../Pages/HomePageData";
import Signin from "../Signin";
import Support from "../Support";

const AllRoutes = () => {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePageData/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </div>
  );
};

export default AllRoutes;
