import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Stack, Heading, } from "@chakra-ui/react";

export default function AddThings() {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        description: "",
        imageUrl: "",
      });
    

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <Box px={6} py={10} bg="gray.100">
          <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
            Add New Thing
          </Heading>
    
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} maxWidth="500px" margin="0 auto">

              <FormControl isRequired>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </FormControl>
    

              <FormControl isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                />
              </FormControl>
    

              <FormControl isRequired>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  rows={4}
                />
              </FormControl>
    

              <FormControl isRequired>
                <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
              </FormControl>
    

              <Button colorScheme="teal" type="submit" size="lg" mt={4}>
                Add Item
              </Button>
            </Stack>
          </form>
        </Box>
      );
}