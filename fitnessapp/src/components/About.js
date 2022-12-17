import React from 'react'
import {Box,Heading,Image,Text, Container,Stack,Flex,Button} from "@chakra-ui/react";
import footer_logo from "./Assets/crono-icon-main-nav.png";
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
    <Box p="2%" w="90%" m="auto" fontFamily="'Open Sans', sans-serif">
     
      <Box p="2%">
        <Box p="6" textAlign="center">
          {/* <Text color="#ff763f" fontSize={{base:'1em',md:"1.41em",lg:'1.41em'}} lineHeight="1.5em" fontWeight="600" textTransform="uppercase">CRONOMETER</Text> */}
          <Heading color="#4f4e53" fontSize={{base:'2em',md:'2.5em',lg:"2.74em"}} lineHeight="1.3em">About the Company</Heading>
        </Box>
        
        <Box display="block" fontFamily="Open Sans" marginBlockStart="1em" marginBlockEnd="1em"  marginInlineStart="0px" marginInlineEnd="0px" color="#404040" fontSize={{base:'1em',md:"1.125em",lg:'1.125em'}} lineHeight="1.5em">
          <Box> Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, our nutritional data is curated from verified, accurate sources. We aim to provide a complete solution – no matter what diet you choose to be on.</Box>
          <br/>
          <Box>Our CEO, Aaron Davidson, built Cronometer as a side project in 2005. He was following the CRON diet (Calorie Restriction with Optimal Nutrition) and being the nutrition nerd/software developer that he is, decided to build an app to track his diet. Thus, Cronometer was born. It was several years later before he came to the conclusion that maybe he was onto something and quit his six-figure corporate job to focus on improving Cronometer.</Box>
          <br/>
          <Box>There are now over 5 million users who are happy he did.</Box>
          <br/>
          <Box>Cronometer's success has hinged entirely on positive word-of-mouth from its users. The company is still – and plans to continue being – a bootstrap startup to this day.</Box>
        </Box>
      </Box>
     
      <Box m='20px 0px' p="3" width="100%"> <Image borderRadius="15" src="https://cdn1.cronometer.com/webflow/crono-team-1-p-1080.jpeg" /></Box>
      
      <Box p="2%"> <Box p="6" textAlign="center"> 
      
      {/* <Text color="#ff763f" fontSize={{base:'0.8em',md:'1.21em',lg:"1.41em"}} lineHeight="1.5em" fontWeight="600" letterSpacing="2px" textTransform="uppercase" >CRONOMETER</Text> */}
          
      <Heading color="#4f4e53" fontSize={{base:'1.77em',md:'2.5em',lg:"2.74em"}} lineHeight="1.3em"> Who We Are </Heading>
     </Box>

        <Box display="block" fontFamily="Open Sans" marginBlockStart="1em" marginBlockEnd="1em" marginInlineStart="0px" marginInlineEnd="0px" color="#404040" fontSize={{base:'1em',md:'1em',lg:"1.125em"}} lineHeight="1.5em">
          
          <Box>While our staff spans the globe our headquarters is based in the small-town of Revelstoke, British Columbia, Canada. Revelstoke is a health-centric mountain town brimming with endless options for staying active and a growing tech community – the perfect combination to call home.</Box>
          <br/>
          <Box>We are an eclectic mix of web developers, designers, nutrition scientists, business majors and personal trainers brought together by a love of nutrition. While our company has grown our mission and values have remained the same; we believe full spectrum nutrition is the best way to understand your diet’s effect on your health. We also believe in empowering everyone by ensuring they have access to accurate and comprehensive data to make informed decisions. </Box>
          <br/>
          <Box>Our goal is to build the best software for people and professionals to manage their nutrition. And we have the passion to make that happen; amazing data paired with awesome customer support truly are the Cronometer difference.</Box>
          <br/>
          <Box>If you have interest in your personal nutrition or working with your client’s nutrition check us out!</Box>
          <br/>
          <Box>Have questions? We would love to hear from you. Email us at: <u>support@cronometer.com</u> </Box>
        </Box>
        <br/>

        <box bg="#4f4e53" pt="30rem" color="white" fontSize={{base:"0.4rem",md:"0.75rem",lg:"0.95rem"}}>
            <hr/>
        </box>

    <Box textAlign="center" fontFamily="Open Sans" display="block" marginBlockStart="1em" marginBlockEnd="1em" marginInlineStart="0px" marginInlineEnd="0px" color="black" fontSize={{base:'1em',md:'1em',lg:"1.125em"}} lineHeight="1.5em">Help us spread the good word about nutrition and become an affiliate.</Box>
     
    <Box p="6" Align="center" >
          <Button borderRadius='5px' border='1px solid black' colorScheme='smokewhite' color="#005c5c" fontSize={{base:'1em',md:"1.41em",lg:'1.41em'}} lineHeight="1.5em" fontWeight="400" textTransform="uppercase">Become an Affiliate</Button>
    </Box>
      </Box>
    </Box>


 
  
    <Box bg="#262a3b" pt="40px" pb="40px" color="white" fontSize={{base:"0.4rem",md:"0.75rem",lg:"0.95rem"}}>
        
        <Box w={{base:"100%",md:"80%",lg:"80%"}} m="auto">
          <Flex  w={{base:"60%",md:"20%",lg:"20%"}} gap="20px" margin="auto" justifyContent="center">
          
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"/>
            
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"/>
            
            <Image  h={{ base:"30px", md: "50px", lg:"50px" }} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"/>
            
            <Image h={{base:"30px",md:"50px",lg:"50px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png" />
          
          </Flex>
         
          <Flex w={{base:"62%",md:"40%",lg:"28%"}} gap="20px" margin="auto" mb="35px" justifyContent="center"> 
            
            <Image h="50px" w={{base:"100px",md:"150px",lg:"150px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/>
            
            <Image h="50px" w={{base:"100px",md:"150px",lg:"150px"}} mt="25px" src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/>
         
          </Flex>
          <hr />
          <Stack maxW="100%" py="6" fontFamily="geomanist-regular',sans-serif" pt="50px">
            <Flex direction="row" justifyContent="space-between"gap="10px" mb="40px">
              
              <Stack>
                <Image w="80%" src={footer_logo} alt="pp"/>
              </Stack>
              
              <Stack align="flex-start" >
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">Cronometer</Box>

                <a href="https://cronometer.com/">For Individuals</a>
                <a href="https://cronometer.com">For Professionals</a>
                <a href="https://cronometer.com">Privacy</a>
                <a href="https://cronometer.com">Terms</a>
              </Stack>
              
              
              <Stack>
                
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">The Company</Box>
                 
                <a href="https://cronometer.com/">About Us</a>
                <a href="https://cronometer.com">Crono Blog</a>
                <a href="https://cronometer.com">Crono Forums</a>
                <a href="https://cronometer.com">Jobs</a>
                <a href="https://cronometer.com">Support</a>

               
              </Stack>

              <Stack align={"flex-start"}>
                
                <Box fontSize={{base:"0.6rem",md:"1.7rem",lg:"1.4rem" }} mt="4px" fontWeight="600">Partners & Affiliates</Box>

                <a href="https://cronometer.com/"> Afiliate Program </a>
                <a href="https://cronometer.com">Media Kit</a>
             
             </Stack>
            </Flex>
            
            <Box textAlign="center" fontSize="2rem" fontWeight="600">
              <Box fontSize={{base:"0.5rem",md:"0.70rem",lg:"0.90rem" }} textAlign="center"> Copyright © 2011-2022</Box>
              
              <Box fontSize={{base:"0.5rem",md:"0.70rem",lg:"0.90rem" }} textAlign="center">All rights reserved</Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default About
