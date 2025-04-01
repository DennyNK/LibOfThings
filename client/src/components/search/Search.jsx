import { Box, Flex, IconButton, Input, Text, Image, Button } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from 'react';
import { useSearchThing } from '../../api/thingsApi.js';
import { Link } from 'react-router';

export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const { foundThings, searchThings } = useSearchThing(searchTerm);
    const [isSearched, setIsSearched] = useState(false);


    const searchHandler = () => {
        searchThings();
        setIsSearched(true);
    }

    return (

        <Box px={6} py={10} bg="gray.50">

            <Flex direction="column" align="center" mb={8}>
                <Text fontSize="2xl" fontWeight="bold" color="purple.600" mb={4}>
                    Search for Items
                </Text>
                <Flex w="full" maxW="400px" align="center">
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for things..."
                        size="md"
                        borderRadius="md"
                    />
                    <IconButton
                        icon={<SearchIcon />}
                        aria-label="Search"
                        onClick={searchHandler}
                        ml={2}
                        size="md"
                        colorScheme="purple"
                    />
                </Flex>
            </Flex>


            <Box mt={6}>
                {isSearched ? (
                    foundThings.length > 0 ? (
                        <Flex wrap="wrap" spacing={4} justify="center">
                            {foundThings.map((thing) => (
                                <Box
                                    key={thing._id}
                                    bg="white"
                                    p={4}
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: 'md' }}
                                    cursor="pointer"
                                    transition="all 0.3s ease"
                                    maxW="320px"
                                    w="full"
                                    textAlign="center"
                                >
                                    <Image 
                                    src={thing.imageUrl} 
                                    alt={thing.title} 
                                    borderRadius="md" 
                                    objectFit="cover" 
                                    width="100%" 
                                    height="200px" 
                                    />
                                    <Text fontWeight="bold" mt={4} noOfLines={1}>{thing.title}</Text>
                                    <Link to={`/catalog/${thing._id}/details`}>
                                        <Button size="sm" colorScheme="purple" mt={4}>
                                            Details
                                        </Button>
                                    </Link>
                                </Box>
                            ))}
                        </Flex>
                    ) : (
                        <Text>No results found</Text>
                    )
                ) : null}
            </Box>
        </Box>

    );
}