import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About";
import Blog from "../Blog";
import Login from "../Login";
import Home from "../Pages/Home";

import Signin from "../Signin";
import Support from "../Support";

const AllRoutes = () => {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog" element={<Support/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;