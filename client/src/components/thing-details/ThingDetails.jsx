import { Box, Button, Text, Flex, Image, VStack, Tag, TagLabel, HStack, useDisclosure } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { Link, useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useDeleteThing, useOneThing } from '../../api/thingsApi';
import ContactUserModal from '../contact-modal/ContactUserModal.jsx';


export default function ThingDetails() {
    const navigate = useNavigate();
    const { userId, isAuthenticated } = useAuth();
    const { thingId } = useParams(); 
    const { thing } = useOneThing(thingId);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { remove } = useDeleteThing();

    const deleteThingHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${thing.title}?`);

        if (!hasConfirmed) {
            return;
        }

        await remove(thingId);
        navigate('/catalog');
    }

    const isOwner = thing._ownerId === userId;

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
                    <Text fontSize="2xl" fontWeight="bold" mb={2} color='purple.600'>
                        {thing.title}
                    </Text>

                    <VStack align="start" spacing={2} mb={4}>
                        <Text fontSize="md" color="coral.800">{thing.description}</Text>
                        <HStack spacing={4}>
                            <Tag colorScheme="purple">
                                <TagLabel>{thing.location}</TagLabel>
                            </Tag>
                            <Tag colorScheme="coral">
                                <TagLabel>{thing.category}</TagLabel>
                            </Tag>
                            <Tag colorScheme="purple">
                                <TagLabel>{thing.purpose}</TagLabel>
                            </Tag>
                        </HStack>
                    </VStack>

                    <HStack spacing={4} mt={4}>
                        {isOwner ? (
                            <>
                                <Link to={`/catalog/${thingId}/edit`}>
                                    <Button leftIcon={<EditIcon />} colorScheme="blue">
                                        Edit
                                    </Button>
                                </Link>
                                <Button leftIcon={<DeleteIcon />} colorScheme="red" onClick={deleteThingHandler}>
                                    Delete
                                </Button>
                            </>
                        ) : (
                            isAuthenticated && (
                                <Button leftIcon={<PhoneIcon />} colorScheme="purple" onClick={onOpen}>
                                    Contact Owner
                                </Button>
                            )
                        )}
                    </HStack>
                </Box>
            </Flex>


            <ContactUserModal
                isOpen={isOpen}
                onClose={onClose}
                thingId={thingId} 
                recipientId={thing._ownerId} 
            />
        </Box>
    );
}
