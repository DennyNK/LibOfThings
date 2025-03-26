import { Box, Button, Text, Flex, Image, VStack, Tag, TagLabel, TagLeftIcon, HStack } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { useOneThing } from '../../api/thingsApi.js';
import { useParams } from 'react-router';

export default function ThingDetails() {

    const { thingId } = useParams();
    const { thing } = useOneThing(thingId);


   return (
    <Box p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

      <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
        <Image
          src={thing.imageUrl}
          alt={thing.title}
          boxSize="250px"
          objectFit="cover"
          borderRadius="md"
          boxShadow="md"
        />
      </Box>

      <Box flex="2">
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {thing.title}
        </Text>
        
        <VStack align="start" spacing={2} mb={4}>
          <Text fontSize="md">{thing.description}</Text>
          <HStack spacing={4}>
            <Tag colorScheme="teal">
              <TagLeftIcon boxSize="12px" as={PhoneIcon} />
              <TagLabel>{thing.city}</TagLabel>
            </Tag>
            <Tag colorScheme="blue">
              <TagLabel>{thing.category}</TagLabel>
            </Tag>
            <Tag colorScheme="purple">
              <TagLabel>{thing.purpose}</TagLabel>
            </Tag>
          </HStack>
        </VStack>

        <HStack spacing={4} mt={4}>
          <Button leftIcon={<EditIcon />} colorScheme="blue" >
            Edit
          </Button>
          <Button leftIcon={<DeleteIcon />} colorScheme="red" >
            Delete
          </Button>
          <Button leftIcon={<PhoneIcon />} colorScheme="green" >
            Contact Owner
          </Button>
        </HStack>
      </Box>
    </Flex>
  </Box>
   );
}