import React from 'react'
import { Box, Image, Heading, Button, Text, Center, Stack } from '@chakra-ui/react'
import Navbar from "../../layout/navbar/index.js";
import Cards from "../../components/cards/1/index";
import Footer from "../../layout/footer/index.js";

function Index() {
  return (
    <Box>
      <Box></Box>
      <Box paddingLeft="30px" paddingTop="20px">
        <Image
          boxSize='120px'
          src="/img/maskup-logo.png"
          alt="Logo maskup" />
      </Box>
      <Center>
        <Box textAlign="center" marginTop="80px">
          <Stack spacing="50px">
            <Box>
              <Heading as="h1" size="4xl">Maskup</Heading>
            </Box>
            <Box>
              <Button variant="five">Más Información</Button>
            </Box>
            <Box>
              <Text color="colors.grayLight">Sitio web para películas, series y demás</Text>
            </Box>
          </Stack>
        </Box>
      </Center>
      <Box marginTop="5em">
        <Box>
            <Cards />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Index