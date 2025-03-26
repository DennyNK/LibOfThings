import { Box, Button, Text, Flex, Image, VStack, Tag, TagLabel, TagLeftIcon, HStack } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { useDeleteThing, useOneThing } from '../../api/thingsApi.js';
import { Link, useNavigate, useParams } from 'react-router';

export default function ThingDetails() {

    const navigate = useNavigate();
    const { thingId } = useParams();
    const { thing } = useOneThing(thingId);
    const { remove } = useDeleteThing();

    const deleteThingHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${thing.title}?`);

        if(!hasConfirmed){
            return
        }
        
        await remove(thingId);

        navigate('/catalog');
    }


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
          <Link to={`/catalog/${thingId}/edit`}>
          <Button leftIcon={<EditIcon />} colorScheme="blue" >
            Edit
          </Button>
          </Link>
          <Button leftIcon={<DeleteIcon />} colorScheme="red" onClick={deleteThingHandler}>
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