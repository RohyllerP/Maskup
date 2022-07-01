import React from 'react'
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react'
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";

function Index() {
    return (
        <Box padding="3em" bg="colors.blueDark">
            <Center>
                <Box>
                    <Stack spacing="40px">
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Link to="/"><GrFacebookOption size="1.5em" /></Link>
                            </Box>
                            <Box>
                                <Link to="/"> <GrInstagram size="1.4em" /></Link>
                            </Box>
                            <Box>
                                <Link to="/"><GrTwitter size="1.5em" /></Link>
                            </Box>
                        </Box>
                        <Box textAlign="center">
                            <Box>
                                <Heading as="h3" size="xs">Información - datos personales</Heading>
                            </Box>
                            <Box>
                                <Heading as="h3" size="xs">Terminos de uso - Politicas de privacidad</Heading>
                            </Box>
                        </Box>
                        <Box textAlign="center">
                            <Text fontSize="sm">@ 2022 - Rohyller Pereira</Text>
                        </Box>
                    </Stack>
                </Box>
            </Center>
        </Box>
    )
}

export default Index