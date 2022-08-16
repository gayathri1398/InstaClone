import {
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
  

const Login =()=>{
    return <>
    <FormControl>
      <Input type='email' placeholder='Phonenumber,username or email' fontSize={"xs"} _focusVisible={"none"}  />
     </FormControl>  
     <FormControl>
      <Input type='password' placeholder='password' fontSize={"xs"} _focusVisible={"none"}/>
     </FormControl>
     <Button backgroundColor={'blue.100'} color={"white"} w={"100%"} fontSize={"sm"}>Log In</Button>
    </>
}

export default Login