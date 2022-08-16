import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {Text, Flex, Divider, Container, Button, Box } from '@chakra-ui/react';
import {logo} from '../assets/logo.png'

// components
import Login from '../components/Auth/Login';
import FaceBookButton from '../components/Auth/FackbookButton';

// px={"60px"}
export default function Home() {
  return (
    <>
   <Container 
   maxW={{base:"container.sm",md:'container.sm'}}
    px={{base:"60px",md:"140px"}}
    pt={{base:"none",md:"50px"}}
     >
   <Box  
   border={{base:"none",md:"1px"}} 
   borderColor={{base:"none",md:'gray.300'}}
   
   >
   <Flex w={"100%"} h={"100%"} pos={"relative"}
    flexDir={"column"} gap={"5px"}
    alignItems={"center"} 
   
    px={{base:"none" ,md:"32px"}}
   >
              <Box w={"150px"} h={"50px"} pos={"relative"}  my={"40px"} objectFit={"cover"}>
              <Image
                src={
                  "https://instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                }
                alt={"Instagram Demo images"}
                layout={"fill"}
              />  
              </Box>
     <Login/>

     <Flex w={"100%"} alignItems={"center"}>
      <Divider border={"1px"} borderColor={"gray.200"}/>
      <Text textTransform={"uppercase"} color={"gray.500"} fontWeight={"bold"} fontSize={"sm"}>or</Text>
      <Divider border={"1px"} borderColor={"gray.200"}/>
     </Flex>
      <FaceBookButton border={"2px"} text={"Login with Facebook"}  />
   

    <Button w={"100%"} bg={"transparent"} color={"blue.700"} fontSize={"xs"}>Forgot password?</Button>
    </Flex>
    </Box>
    <Flex flexDir={"row"} justifyContent={"center"} alignItems={"center"} my={"40px"} >

  <Flex
  border={{base:"none",md:"1px"}} 
  borderColor={{base:"none",md:'gray.300'}}
  justifyContent={{base:"none",md:"center"}}
  alignItems={"center"}
 
  
  px={{base:'none',md:"10px"}}
  py={{base:'none',md:"10px"}}
  w={"100%"}>
   <Text fontSize={"sm"} >Don't have an account?</Text>
      <Button color={"blue.600"} bg={"transparent"} fontSize={"sm"}>Sign up</Button>
  </Flex>
      
   
   
   </Flex>
    <Text mt={"60px"} textAlign={"center"} my={"15px"}>Get the App</Text>

  <Flex gap={"8px"} justifyContent={"center"} w={"100%"}>
  <Box w={"120px"} h={"40px"}  pos={"relative"}>
   <Image
    src={"https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"}
    layout={"fill"}
    />
   </Box>
   <Box w={"120px"} h={"40px"}  pos={"relative"}>
   <Image
    src={"https://instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"}
    layout={"fill"}
    />
   </Box>
  </Flex>

   
   </Container>
   </>
  )

}
