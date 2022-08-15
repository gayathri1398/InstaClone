import {
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
  

const Login =()=>{
    return <>
    <FormControl>
      <Input type='email'placeholder='Phonenumber,username or email' />
     </FormControl>  
     <FormControl>
      <Input type='password' placeholder='password' />
     </FormControl>
     <Button backgroundColor={'blue.100'} color={"white"} w={"100%"}>Log In</Button>
    </>
}

export default Login