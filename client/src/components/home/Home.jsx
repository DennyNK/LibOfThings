import { Box, Heading, Text} from "@chakra-ui/react";

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
        </Box>
      );
}