import { Box, Heading, Text, HStack} from "@chakra-ui/react";



export default function Home() {

      return (
        <Box px={6} py={10} bg="gray.50">
  
          <Box mb={8} textAlign="center">
            <Heading as="h1" size="2xl" color="purple.500">
              Welcome to the Library of things!
            </Heading>
            <Text fontSize="lg" color="peach.500" mt={2}>
              Borrow, lend or give away things.
            </Text>
          </Box>
    
          
          <Box>
            <Heading as="h2" size="lg" mb={4} textAlign="center" color="purple.700">
              How it works
            </Heading>
          </Box>

          <HStack spacing={8} justify="center" mt={6}>

        <Box
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          maxW="sm"
        >
          <Heading as="h3" size="md" color="purple.700" mb={2}>
            Step 1: Browse or add items
          </Heading>
          <Text color="peach.700">
            Check out the Catalog or Search section.
            Add things.
          </Text>
        </Box>

        <Box
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          maxW="sm"
        >
          <Heading as="h3" size="md" color="purple.700" mb={2}>
            Step 2: Exchange messages
          </Heading>
          <Text color="peach.700">
            Send a message to borrow or take an item. Answer to messages for your things.
          </Text>
        </Box>

        <Box
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          maxW="sm"
        >
          <Heading as="h3" size="md" color="purple.700" mb={2}>
            Step 3: Enjoy
          </Heading>
          <Text color="peach.700">
            Take, borrow or lend things. Always be respecftul.
          </Text>
        </Box>
      </HStack>
          

        </Box>
      );
}