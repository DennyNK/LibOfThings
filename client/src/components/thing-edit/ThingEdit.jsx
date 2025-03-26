import { Box, Button, FormControl, FormLabel, Input, Textarea, HStack, Text, Select } from '@chakra-ui/react';
import { useEditThing, useOneThing } from '../../api/thingsApi.js';
import { Navigate, useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth.js';



export default function ThingEdit() {

    const navigate = useNavigate();

    const { userId } = useAuth();
    const { thingId } = useParams();
    const { thing, isLoading } = useOneThing(thingId);
    const { edit } = useEditThing();
    

    const formAction = async (formData) => {

        const thingData = Object.fromEntries(formData);

        await edit(thingId, thingData);

        navigate(`/catalog/${thingId}/details`);

    }

    if(isLoading){
        return <Text>Loading...</Text>;
    }

    const isOwner = userId === thing._ownerId;
    

    if(!isOwner){
        return <Navigate to='/catalog' />
    }

   return (
    <Box p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
    <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Edit Thing
    </Text>

    <form id='edit' action={formAction}>
        <FormControl isRequired mb={4}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
                id="title"
                name="title"
                defaultValue={thing.title}
                placeholder="Enter the title"
            />
        </FormControl>

        <FormControl isRequired mb={4}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
                id="description"
                name="description"
                defaultValue={thing.description}
                placeholder="Enter the description"
            />
        </FormControl>

        <FormControl isRequired mb={4}>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select
                        id="category"
                        name="category"
                        defaultValue={thing.category}
                        placeholder="Select a category"
                    >
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
                    </Select>
                </FormControl>

                <FormControl isRequired mb={4}>
                    <FormLabel htmlFor="purpose">Purpose</FormLabel>
                    <Select
                        id="purpose"
                        name="purpose"
                        defaultValue={thing.purpose}
                        placeholder="Select a purpose"
                    >
                        <option value="For borrowing">For borrowing</option>
                        <option value="Giveaway">Giveaway</option>
                    </Select>
                </FormControl>

        <FormControl isRequired mb={4}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
                id="city"
                name="location"
                defaultValue={thing.location}
                placeholder="Enter the city"
            />
        </FormControl>

        <FormControl isRequired mb={4}>
            <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
            <Input
                id="imageUrl"
                name="imageUrl"
                defaultValue={thing.imageUrl}
                placeholder="Enter the image URL"
            />
        </FormControl>

        <HStack spacing={4} mt={6}>
            <Button type="submit" colorScheme="blue">
                Save Changes
            </Button>
            <Button colorScheme="gray" onClick={() => navigate(`/catalog/${thingId}/details`)}>
                Cancel
            </Button>
        </HStack>
    </form>
</Box>
   );
}