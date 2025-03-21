import { useNavigate } from "react-router";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Stack, Heading, } from "@chakra-ui/react";
import thingsService from "../../services/thingsService.js";
import { useState } from "react";

export default function AddThings() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    imageUrl: "",
    category: "",
    purpose: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitAction = async (formData) => {
    const thingData = Object.fromEntries(formData);
    // console.log(thingData);

    await thingsService.addThing(thingData);

    navigate('/catalog');
  }

  return (
    <Box px={6} py={10} bg="gray.100">
      <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
        Add New Thing
      </Heading>

      <form action={submitAction}>
        <Stack spacing={4} maxWidth="500px" margin="0 auto">

          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={changeHandler}
            />
          </FormControl>


          <FormControl isRequired>
            <FormLabel htmlFor="location">City</FormLabel>
            <Input
              id="location"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={changeHandler}
            />
          </FormControl>


          <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={changeHandler}
              rows={4}
            />
          </FormControl>


          <FormControl isRequired>
            <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
            <Input
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter image URL"
              value={formData.imageUrl}
              onChange={changeHandler}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="category">Category</FormLabel>
            <select name="category" value={formData.category} onChange={changeHandler}>
              <option value="">--Choose--</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing & Accessories">Clothing & Accessories</option>
              <option value="Home & Furniture">Home & Furniture</option>
              <option value="Books & Media">Books & Media</option>
              <option value="Toys & Games">Toys & Games</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
              <option value="Beauty & Health">Beauty & Health</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Collectibles & Art">Collectibles & Art</option>
              <option value="Other">Other</option>
            </select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="purpose">Purpose</FormLabel>
            <select name="purpose" value={formData.purpose} onChange={changeHandler}>
              <option value="">--Choose--</option>
              <option value="Borrowing">For borrowing</option>
              <option value="Giveaway">Giveaway</option>
            </select>
          </FormControl>


          <Button colorScheme="teal" type="submit" size="lg" mt={4}>
            Add Item
          </Button>
        </Stack>
      </form>
    </Box>
  );
}