import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import thingsService from '../../services/thingsService.js';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';
import CategorySidebar from '../categorySidebar/categorySidebar.jsx';

import { Box, SimpleGrid, Spinner, Flex} from '@chakra-ui/react'

export default function Catalog() {

    const [loading, setLoading] = useState(true);
    const [things, setThings] = useState([]);

    const location = useLocation();

      useEffect(() => {

        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        const purpose = params.get('purpose');

        const fetchThings = async () => {
          setLoading(true);
    
          try {
            const result = await thingsService.thingsByFilter(category, purpose);
            setThings(result);
          } catch (err) {
            console.error('Error fetching filtered things:', err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchThings();
      }, [location.search]); 


   return (
            
                <Box px={6} py={10} bg="gray.100">
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between">

                    <Box width={{ base: "100%", md: "250px" }} mb={{ base: 4, md: 0 }}>
                    <CategorySidebar 
                    />
                    </Box>

                    {loading
                    ? ( <Box display="flex" justifyContent="center" alignItems="center" height="100px">
                        <Spinner size="xl" color="teal.500" />
                      </Box>)
                    : (<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

                        {things.map(thing => (<CatalogThing key={thing._id} {...thing}/>))}
   
                      </SimpleGrid>
                      )}

                    </Flex>
                    </Box>
            );
}