import React from 'react'
import { Link } from "react-router-dom";
import { Box, Image, Heading, Button, Text, Center, HStack } from '@chakra-ui/react'
import {AiOutlineHome, AiOutlineInfoCircle} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";

function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between" paddingRight="20px">
      <Box>
        <Image
            boxSize='120px'
            src="/img/maskup-logo.png"
            alt="Logo maskup" />
      </Box>
      <Box  display="flex" >
        <HStack spacing="40px">
          <Box>
            <Link to="/"><AiOutlineHome size="2.2rem"/></Link>
          </Box>
          <Box>
            <Link to="/"><AiOutlineInfoCircle size="2.2rem"/></Link>
          </Box>
          <Box>
            <Link to="/"><BiUserCircle size="2.2rem"/></Link>  
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}

export default Navbar