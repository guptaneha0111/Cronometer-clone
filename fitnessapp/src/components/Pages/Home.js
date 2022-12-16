import React from "react";
import { Box } from "@chakra-ui/react";
import HomePageData from "./HomePageData";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Home = () => {
  return (
    <Box>
      <Navbar/>
     <HomePageData/>
     <Footer/>
      </Box>
  );
};

export default Home;