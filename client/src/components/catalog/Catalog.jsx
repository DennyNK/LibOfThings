import { Box, SimpleGrid, Text,} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import thingsService from '../../services/thingsService.js';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';

export default function Catalog() {

   const [things, setThings] = useState([]);

    useEffect( () => {
        thingsService.getAllThings()
        .then(result => setThings(result));
    }, [])

   return (
                <Box px={6} py={10} bg="gray.100">
                   <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

                     {things.length > 0
                     ? things.map(thing => <CatalogThing key={thing._id} {...thing}/>) 
                     : <Text>No things</Text>}

                   </SimpleGrid>
                 </Box>

   );
}