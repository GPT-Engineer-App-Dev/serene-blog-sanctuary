import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, imageUrl };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([newPost, ...existingPosts]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Add New Post
          </Heading>
        </Box>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isRequired
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              isRequired
            />
            <Input
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button type="submit" colorScheme="blue" width="full">
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;