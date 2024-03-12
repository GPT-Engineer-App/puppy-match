import React from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBone, FaDog, FaHeart, FaPaw, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          PawsDate - Find Your Dog's Match
        </Heading>
        <Box p={4} borderRadius="lg" borderWidth="1px">
          <Flex justifyContent="center" alignItems="center">
            <Input placeholder="Search for playmates..." size="lg" mr={4} />
            <Button leftIcon={<FaSearch />} colorScheme="pink" size="lg">
              Search
            </Button>
          </Flex>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={6}>
          <Center p={4} borderWidth="1px" borderRadius="lg" flex="1">
            <VStack>
              <Image src="https://images.unsplash.com/photo-1497994139250-caecb78f9df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2clMjBwcm9maWxlfGVufDB8fHx8MTcxMDI1NzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
              <Text fontWeight="bold">Baxter</Text>
              <Text fontSize="sm">The Adventurous Beagle</Text>
              <Button leftIcon={<FaBone />} colorScheme="teal">
                Send a Bone
              </Button>
            </VStack>
          </Center>
          <Center p={4} borderWidth="1px" borderRadius="lg" flex="1">
            <VStack>
              <Image src="https://images.unsplash.com/photo-1535230464639-a413d00b9934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxkb2clMjBwcm9maWxlfGVufDB8fHx8MTcxMDI1NzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
              <Text fontWeight="bold">Luna</Text>
              <Text fontSize="sm">The Playful Pomeranian</Text>
              <Button leftIcon={<FaHeart />} colorScheme="red">
                Send Love
              </Button>
            </VStack>
          </Center>
          <Center p={4} borderWidth="1px" borderRadius="lg" flex="1">
            <VStack>
              <Image src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxkb2clMjBwcm9maWxlfGVufDB8fHx8MTcxMDI1NzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
              <Text fontWeight="bold">Rocky</Text>
              <Text fontSize="sm">The Energetic Bulldog</Text>
              <Button leftIcon={<FaPaw />} colorScheme="orange">
                Paw Friend
              </Button>
            </VStack>
          </Center>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
