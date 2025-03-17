import { Box, Heading, Text, SimpleGrid, Card, CardBody, Image, Stack, Button } from "@chakra-ui/react";

export default function Home() {
    const latestItems = [
        { id: 1, title: "New Product 1", description: "Description of new product 1", imageUrl: "https://via.placeholder.com/150" },
        { id: 2, title: "New Product 2", description: "Description of new product 2", imageUrl: "https://via.placeholder.com/150" },
        { id: 3, title: "New Product 3", description: "Description of new product 3", imageUrl: "https://via.placeholder.com/150" },
      ];
    
      return (
        <Box px={6} py={10} bg="gray.100">
          {/* Welcome Message */}
          <Box mb={8} textAlign="center">
            <Heading as="h1" size="2xl" color="teal.500">
              Welcome to Our Website!
            </Heading>
            <Text fontSize="lg" color="gray.600" mt={2}>
              Discover the latest additions to our collection.
            </Text>
          </Box>
    
          {/* Latest Items Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4} textAlign="center" color="teal.500">
              Latest Added Items
            </Heading>
    
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {latestItems.map((item) => (
                <Card key={item.id} boxShadow="md" borderRadius="md">
                  <Image src={item.imageUrl} alt={item.title} borderRadius="md" />
                  <CardBody>
                    <Stack spacing={3}>
                      <Heading size="md" color="teal.600">{item.title}</Heading>
                      <Text fontSize="sm" color="gray.500">{item.description}</Text>
                      <Button colorScheme="teal" size="sm">
                        Learn More
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      );
}