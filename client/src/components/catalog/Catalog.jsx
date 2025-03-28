import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';
import CategorySidebar from '../categorySidebar/categorySidebar.jsx';

import { Box, SimpleGrid, Spinner, Flex, Text } from '@chakra-ui/react'
import { useFetchThings, useThingsByFilter } from '../../api/thingsApi.js';

export default function Catalog() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);

  const { things } = useFetchThings();

  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const purpose = params.get('purpose');

  const { filteredThings } = useThingsByFilter(category, purpose);

  

  useEffect(() => {
      if(things.length === 0){
        setNoResult(true)
      } else if(filteredThings.length === 0 && (category || purpose)){
      setNoResult(true);
    } else {
      setNoResult(false);
    }
    setLoading(false)
  
  }, [things, filteredThings, category, purpose]);



  return (

    <Box px={6} py={10} bg="gray.100">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">

        <Box width={{ base: "100%", md: "250px" }} mb={{ base: 4, md: 0 }}>
          <CategorySidebar />
        </Box>

        {loading
          ? (<Box display="flex" justifyContent="center" alignItems="center" height="100px" width="100%">
            <Spinner size="xl" color="teal.500" />
          </Box>)
          : noResult
            ? (<Box display="flex" justifyContent="center" alignItems="center" height="100px" width="100%">
              <Text fontSize="xl" color="gray.500">No results found</Text>
            </Box>)
            : (<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

              {(category || purpose ? filteredThings : things).map(thing => (<CatalogThing key={thing._id} {...thing} />))}

            </SimpleGrid>
            )}

      </Flex>
    </Box>
  );
}