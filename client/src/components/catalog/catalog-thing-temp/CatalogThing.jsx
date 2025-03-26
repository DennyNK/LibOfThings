import { Card, Image, CardBody, Stack, Heading, Text, Button} from '@chakra-ui/react'
import { Link } from 'react-router';


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
                                  <Link to={`/catalog/${_id}/details`}>
                                    <Button colorScheme="teal" size="sm">
                                      Details
                                    </Button>
                                    </Link>
                                  </Stack>
                                </CardBody>
                              </Card>
   );
}