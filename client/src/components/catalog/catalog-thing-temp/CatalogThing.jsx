import { Card, Image, CardBody, Stack, Heading, Text, Button} from '@chakra-ui/react'


export default function CatalogThing({
   _id,
   title,
   imageUrl,
   location
}) {
   return (
       <Card key={_id} boxShadow="md" borderRadius="md">
                                <Image src={imageUrl} alt={title} borderRadius="md" />
                                <CardBody>
                                  <Stack spacing={3}>
                                    <Heading size="md" color="teal.600">{title}</Heading>
                                    <Text>{location}</Text>
                                    <Button colorScheme="teal" size="sm">
                                      Learn More
                                    </Button>
                                  </Stack>
                                </CardBody>
                              </Card>
   );
}