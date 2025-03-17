import { useEffect, useState } from 'react';
import thingsService from '../../services/thingsService.js';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';

import { Box, SimpleGrid, Spinner, Flex} from '@chakra-ui/react'
import CategorySidebar from '../categorySidebar/categorySidebar.jsx';

export default function Catalog() {

    const [loading, setLoading] = useState(true);
    
    const [things, setThings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState('');


    useEffect( () => {

        const fetchThings = async () => {
            setLoading(true);

            try{
                const result = await thingsService.thingsByFilter(selectedCategory, selectedPurpose);
                setThings(result);
            } catch (err) {
                console.error("Error fetching filtered things:", err);
            } finally{
                setLoading(false);
            }
        };
        fetchThings();
        
    }, [selectedCategory, selectedPurpose])

   return (
            
                <Box px={6} py={10} bg="gray.100">
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between">

                    <Box width={{ base: "100%", md: "250px" }} mb={{ base: 4, md: 0 }}>
                    <CategorySidebar 
                    setSelectedCategory={setSelectedCategory}
                    setSelectedPurpose={setSelectedPurpose}
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