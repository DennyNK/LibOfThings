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
        <Flex>

            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search for things...'
            />
            <IconButton
                icon={<SearchIcon />}
                aria-label="Search"
                onClick={searchHandler}
            />

           <Box mt={4}>
           {isSearched ? (
                    foundThings.length > 0 ? (
                        foundThings.map((thing) => (
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
                                    <Button size="sm" colorScheme="blue" mt={4}>
                                        Details
                                    </Button>
                                </Link>
                            </Box>
                        ))
                    ) : (
                        <Text>No results found</Text>
                    )
                ) : null} 

            </Box>


        </Flex>
    );
}