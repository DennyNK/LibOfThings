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

  const { things, error: fetchThingsError} = useFetchThings();

  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const purpose = params.get('purpose');

  const { filteredThings, error: filterThingsError } = useThingsByFilter(category, purpose);

  

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

  const error = fetchThingsError || filterThingsError;

  return (

    <Box px={6} py={10} bg="gray.100">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">

        <Box width={{ base: "100%", md: "250px" }} mb={{ base: 4, md: 0 }}>
          <CategorySidebar />
        </Box>

        {loading
          ? (<Box display="flex" justifyContent="center" alignItems="center" height="100px" width="100%">
            <Spinner size="xl" color="purple.500" />
          </Box>)
          : error
            ? (<Box display="flex" justifyContent="center" alignItems="center" height="100px" width="100%">
              <Text fontSize="xl" color="red.500">{error}</Text>
            </Box>)
            : noResult
              ? (<Box display="flex" justifyContent="center" alignItems="center" height="100px" width="100%">
                <Text fontSize="xl" color="purple.600">No results found</Text>
              </Box>)
              : (<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {(category || purpose ? filteredThings : things).map(thing => (<CatalogThing key={thing._id} {...thing} />))}
              </SimpleGrid>
              )}

      </Flex>
    </Box>
  );
}