import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import thingsService from '../../services/thingsService.js';
import CatalogThing from './catalog-thing-temp/CatalogThing.jsx';
import CategorySidebar from '../categorySidebar/categorySidebar.jsx';

import { Box, SimpleGrid, Spinner, Flex, Text } from '@chakra-ui/react'

export default function Catalog() {

  const [loading, setLoading] = useState(true);
  const [things, setThings] = useState([]);
  const [noResult, setNoResult] = useState(false);

  const location = useLocation();

  const fetchThings = async (category, purpose) => {
    setLoading(true);
    setNoResult(false);

    try {
      const result = await thingsService.thingsByFilter(category, purpose);
      setThings(result);
      if (result.length === 0) {
        setNoResult(true);
      }
    } catch (err) {
      console.error('Error fetching filtered things:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const purpose = params.get('purpose');

    fetchThings(category, purpose);
  }, [location.search]);



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

              {things.map(thing => (<CatalogThing key={thing._id} {...thing} />))}

            </SimpleGrid>
            )}

      </Flex>
    </Box>
  );
}