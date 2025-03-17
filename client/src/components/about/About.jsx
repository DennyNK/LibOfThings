import { Box, Heading, Text } from "@chakra-ui/react"

export default function About() {
   return (
    
                 <Box mb={8} textAlign="center">
                   <Heading as="h3" size="lg" color="teal.500">
                     The Library of things
                   </Heading>
                   <Text fontSize="lg" color="gray.600" mt={2}>
                     There will be info here about the initiative and how it works maybe
                   </Text>
                 </Box>
   );
}