import { Box, SimpleGrid, Spinner} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import thingsService from '../../services/thingsService.js';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';

export default function Catalog() {

   const [things, setThings] = useState([]);
   const [loading, setLoading] = useState(true);

    useEffect( () => {
        thingsService.getAllThings()
        .then(result => {
            setThings(result);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching things:', err);
            setLoading(false);
        })
    }, [])

   return (
                <Box px={6} py={10} bg="gray.100">

                    {loading
                    ? ( <Box display="flex" justifyContent="center" alignItems="center" height="100px">
                        <Spinner size="xl" color="teal.500" />
                      </Box>)
                    : (<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

                        {things.map(thing => (<CatalogThing key={thing._id} {...thing}/>))}
   
                      </SimpleGrid>
                      )}

                    </Box>
            );
}