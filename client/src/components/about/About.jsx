import { Box, Heading, Text } from "@chakra-ui/react"

export default function About() {
   return (
    
                 <Box mb={8} textAlign="center" mt={10} bg="gray.50" >
                   <Heading as="h3" size="lg" color="purple.600">
                     The Library of things
                   </Heading>
                   <Text fontSize="lg" color="coral.700" mt={10} maxWidth="800px" mx="auto" whiteSpace="pre-line" lineHeight="1.8">
                     How ofter do you use all the things you own? {"\n"} 
                     What do you do with the things you decide you no longer need? {"\n"} 
                     In a world of consumerism we can share things or we can give away the things we don&apos;t need anymore
                     instead of throwing them away. {"\n"}
                     In this way we are more mindful of our consumption and care better for the environment. {"\n"}
                     Enjoy and share with people around you!
                   </Text>
                 </Box>
   );
}