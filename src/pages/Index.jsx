import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences</Text>
        </Box>
        <Box textAlign="center">
          <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>
            Add New Post
          </Button>
        </Box>
        <Box>
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%" mb={4}>
              <Heading fontSize="xl">{post.title}</Heading>
              {post.imageUrl && <Image src={post.imageUrl} alt={post.title} borderRadius="md" mb={4} />}
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;