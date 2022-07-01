import React from "react";
import { Box, Text, Image,  } from '@chakra-ui/react';

const data = [
    {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
        name: "Rohyller dsaddasadsadsdasadsasdasdadssadasd",
        age: 17,
        alt: "Imagen de rohyller",
    },
    {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
        name: "Juan",
        age: 24,
        alt: "Imagen de Juan",
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
        name: "Mario",
        age: 10,
        alt: "Imagen de Mario",
    }
]
function Example({ imageSource, name, age }) {
    return (
        <Box
            color="black"
            background="white"
            boxShadow='dark-lg'
            transition="all 3s linear"
            _hover={{
                position: "relative",
                top: "-25px",
            }}
            cursor="pointer"
            my="20px"
            maxWidth="270px"
        >
            <Box>
                <Box>
                    <Image
                        boxSize='270px'
                        src={imageSource}
                        alt="Imagen de Rohyller"
                    />
                </Box>
                <Box px="20px" display="flex" >
                    <Box p="20px 15px">
                        <Text  noOfLines = { 1 }>{name}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
function Index() {
    return (
        <Box mx="45px" display="flex" justifyContent="space-between" flexWrap="wrap">
            {
                data.map((e) => (
                    <Box key={e.id}>
                        <Example
                            imageSource={e.image}
                            name={e.name}
                            age={e.age}
                        />
                    </Box>
                ))
            }
        </Box>
    )
}

export default Index