import { Card, Image, CardBody, Stack, Heading, Tag, TagLabel, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router';


export default function CatalogThing({
  _id,
  title,
  imageUrl,
  location,
  purpose
}) {
  return (
    <Card key={_id} boxShadow="md" borderRadius="md">
      <Image 
      src={imageUrl} 
      alt={title} 
      borderRadius="md" 
      objectFit="cover"
      width="100%"
      height="100%"
      />
      <CardBody>
        <Stack spacing={3}>
          <Heading size="md" color="purple.600">{title}</Heading>
          <HStack spacing={2}>
            <Tag colorScheme="purple" maxWidth="fit-content">
              <TagLabel>{location}</TagLabel>
            </Tag>
            <Tag colorScheme="coral" maxWidth="fit-content">
              <TagLabel>{purpose}</TagLabel>
            </Tag>
          </HStack>
          <Link to={`/catalog/${_id}/details`}>
            <Button colorScheme="purple" size="sm">
              Details
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
}