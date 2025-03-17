import { Box, Heading, Text, SimpleGrid, VStack, Link} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router';
import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";

export default function Home() {

      return (
        <Box px={6} py={10} bg="gray.100">
          {/* Welcome Message */}
          <Box mb={8} textAlign="center">
            <Heading as="h1" size="2xl" color="teal.500">
              Welcome to the Library of things!
            </Heading>
            <Text fontSize="lg" color="gray.600" mt={2}>
              Borrow, lend or give away things.
            </Text>
          </Box>
    
          {/* Latest Items Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
              How it works
            </Heading>
          </Box>

          <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
        Browse by Category
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} mb={10}>
        {categories.map((category) => (
          <Link as={RouterLink} to={category.link} key={category.name} _hover={{ textDecoration: "none" }}>
            <VStack
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              {/* <Image src={category.image} alt={category.name} boxSize="80px" /> */}
              <Text fontSize="md" fontWeight="bold" color="gray.700">{category.name}</Text>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>

      {/* Purposes Section */}
      <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
        Browse by Purpose
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 2 }} spacing={6}>
        {purposes.map((purpose) => (
          <Link as={RouterLink} to={purpose.link} key={purpose.name} _hover={{ textDecoration: "none" }}>
            <VStack
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              {/* <Image src={purpose.image} alt={purpose.name} boxSize="80px" /> */}
              <Text fontSize="md" fontWeight="bold" color="gray.700">{purpose.name}</Text>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>

        </Box>
      );
}