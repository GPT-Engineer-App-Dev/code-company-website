import { Container, Text, VStack, Heading, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Our Coding Company</Heading>
        <Text fontSize="lg" textAlign="center">We provide top-notch coding services to help you build and scale your digital products.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
        <Box boxSize="sm">
          <Image src="/images/placeholder.png" alt="Coding illustration" />
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;