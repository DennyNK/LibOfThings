import { Box, Button, Text, Grid, Image, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { useFetchThings } from '../../api/thingsApi.js';
import useAuth from '../../hooks/useAuth.js';
import { Link } from 'react-router';

export default function Profile() {

    const { userId, email } = useAuth();
    const { things } = useFetchThings();


    const userThings = things.filter(thing => thing._ownerId === userId);


   return (
    <Box p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="coral.700">{email}&apos;s Profile</Text>

        <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="semibold" color="coral.500">Your Things</Text>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {userThings.length > 0 ? (
                    userThings.map((thing) => (
                        <Box
                            key={thing._id}
                            bg="white"
                            p={4}
                            borderRadius="md"
                            boxShadow="sm"
                            _hover={{ boxShadow: 'md' }}
                            cursor="pointer"
                        >

                            <Image src={thing.imageUrl} alt={thing.title} borderRadius="md" />
                            

                            <Text fontWeight="bold" mt={4} noOfLines={1}>{thing.title}</Text>


                            <Link to={`/catalog/${thing._id}/details`}>
                                <Button size="sm" colorScheme="purple" mt={4}>
                                    Details
                                </Button>
                            </Link>
                        </Box>
                    ))
                ) : (
                    <Text color="coral.500">No things added yet. 
                        <Link to='/add'>
                        <ChakraLink color="purple.500" fontWeight="bold" ml={2}>
                        Add something new!
                        </ChakraLink>
                        </Link>
                    </Text>
                )}
            </Grid>
        </VStack>
    </Box>
   );
}