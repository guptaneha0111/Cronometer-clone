
import { Box, Button, Image, Img, Text, Input,Flex, Alert,AlertIcon,AlertTitle,AlertDescription, Stack, } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate, NavLink} from "react-router-dom"



const Inputs = styled.input`
  width: 98%;
  // outline:none;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  padding-right: -15px;
  border-radius: 4px;
`;
const Login = () => {
  function handlesign()
  {
    window.location.href="/signin"
  }
  
  const [error, setError] = useState({
    status:false,
    msg:"",
    type:""
  })

  const navigate= useNavigate();
  

  const handlesubmit= (e)=>{
    e.preventDefault();
    const data= new FormData(e.currentTarget)
    const actualdata={
      email:data.get('email'),
      password: data.get('password')
    }
    
    if(actualdata.email && actualdata.password)
    {
      console.log(actualdata)
      document.getElementById("form_data").reset()
      setError({status:true, msg:"Login Success", type:"seccess"})
      navigate("/")
    }
    else{
      console.log("all fields are required");
      setError({status:false, msg:"All Fields are Required", type:"error"})
    }
  }
  
  return (
    <>
     <Box w="100%" m="auto" p="1.5%" size={["xs", "sm", "md", "lg"]} bg="#262a3b!important">
      <Flex justifyContent="space-between" alignItems="center">
    <Box w={["70%", "70%", "40%"]}>
          <Box w={["90%", "90%", "50%"]} textAlign="center">
            <Image src="https://cdn1.cronometer.com/webflow/Cronometer-Logo---Mandarin.svg" alt="logo" w="100%" color="white" />
         </Box>
         
        </Box>
        </Flex>
        </Box>


    <Box w={"100%"} mt="5">
      <Box
        w={"600px"}
        m="auto"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        p="30px"
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          mt="10"
          mb={"5"}
        >
          <Text fontSize="28px" fontWeight="800">Welcome Back</Text>
        </Box>
        <form onSubmit={handlesubmit} id="form_data">
          <Box w={"100%"} m={"auto"} py={5}>
            <Inputs
              type="email"
             
              placeholder="Email Address"
              name="email"
              defaultValue={""}
            />
            <Inputs
              type="password"
              placeholder="password "
              name="password"
             
              defaultValue={""}
            />

            <Input
              type={"submit"}
              w={"98%"}
              cursor="pointer"
              flex={1}
              mt={2}
              fontSize={"lg"}
              ml={1}
              bg={"#67AC5B"}
              color={"white"}
              _hover={{
                bg: "#005c5c",
              }}
              height="50px"
              _focus={{
                bg: "#005c5c",
              }}
            />

            <Box
              display={"flex"}
              fontSize="20px"
              justifyContent={"space-between"}
              mt="50px"
            >
              <Box>
                Not a member?{" "}
                <Text as="span" color="#005C5C" onClick={handlesign} cursor="pointer">
                  Sign Up 
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="span" color="#005C5C">
                  Forgot your password?
                </Text>
              </Box>
             
            </Box>
          </Box>
        </form>
        {error.status ? <Alert status="success"> <AlertIcon />{error.msg}</Alert> :
         <Alert status="error"> <AlertIcon />{error.msg}</Alert>}
      
      </Box>
    </Box>
    </>
  );
};

export default Login;
