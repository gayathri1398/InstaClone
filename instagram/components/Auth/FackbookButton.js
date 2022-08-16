import { Button } from "@chakra-ui/react"
import {FaFacebookSquare} from "react-icons/fa"



const FaceBookButton =(props)=>{
    return<>
    
    <Button 
    color={"blue.800"} 
    leftIcon={<FaFacebookSquare/>} 
    background={"transparent"}
    fontSize={"sm"}>
        {props.text}
    </Button>
    </>
}
export default FaceBookButton