import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {  Text,Flex,Divider, Container,Button, Box } from '@chakra-ui/react';
import {logo} from '../assets/logo.png'

// components
import Login from '../components/Auth/Login';
import FaceBookButton from '../components/Auth/FackbookButton';


export default function Home() {
  return (
    <>
   <Container maxW={"container.sm"}>
   <Flex w={"100%"} h={"100%"} pos={"relative"} flexDir={"column"} gap={"5px"} alignItems={"center"} >
              {/* <Image
                src={
                  "https://instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
                }
                alt={"Instagram Demo images"}
                layout={"fill"}
              />   */}
     <Login/>

     <Flex w={"100%"} alignItems={"center"}>
      <Divider border={"1px"} borderColor={"gray.200"}/>
      <Text textTransform={"uppercase"} color={"gray.500"} fontWeight={"bold"}>or</Text>
      <Divider border={"1px"} borderColor={"gray.200"}/>
     </Flex>
      <FaceBookButton border={"2px"} text={"Login with Facebook"}  />
    </Flex>

    <Button>Forgot password</Button>

    <Flex flexDir={"row"}>
    <Text>Don't have an account?</Text>
     <Button>Sign up</Button>
    </Flex>

    <Text>Get the App</Text>

  <Flex ju>
  <Box w={"110px"} h={"40px"}  pos={"relative"}>
   <Image
    src={"https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"}
    layout={"fill"}
    />
   </Box>
   <Box w={"110px"} h={"40px"}  pos={"relative"}>
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
