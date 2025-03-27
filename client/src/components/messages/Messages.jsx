import { useState, useEffect } from "react";
import { Box, Text, VStack, Spinner, Textarea, Button, HStack } from '@chakra-ui/react';
import { useLocation } from 'react-router';
import { useMessages, useSendMessage } from '../../api/messagesApi';
import useAuth from '../../hooks/useAuth';
import { useOneThing } from '../../api/thingsApi';

export default function Messages() {
    const { messages, loading, error, conversations } = useMessages();
    const { sendMessage, sending } = useSendMessage();
    const { userId } = useAuth();
    const [reply, setReply] = useState("");
    const [selectedChat, setSelectedChat] = useState(null);
    
    const location = useLocation();
    const queryThingId = new URLSearchParams(location.search).get('thingId');
    const [thingId, setThingId] = useState(queryThingId || localStorage.getItem("thingId"));

    useEffect(() => {
        if (queryThingId) {
            localStorage.setItem("thingId", queryThingId);
            setThingId(queryThingId);
        }
    }, [queryThingId]);

    const { thing } = useOneThing(thingId); 

    const sendMessageHandler = async () => {
        if (!reply.trim() || !selectedChat) return;
    
        const success = await sendMessage({ 
            thingId, 
            recipientId: selectedChat, 
            content: reply 
        });
    
        if (success) {
            setReply(""); 
        }
    };

    useEffect(() => {
        if (thing && thing._id) {
            localStorage.setItem(`thing-${thing._id}`, JSON.stringify(thing));
        }
    }, [thing]);


    const getThingTitle = (thingId) => {
        const cachedThing = localStorage.getItem(`thing-${thingId}`);
        return cachedThing ? JSON.parse(cachedThing).title : "Unknown Item";
    };


    const handleSelectChat = (user) => {
        setSelectedChat(user);
    };

    

    if (loading) {
        return (
            <Box p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
                <Spinner size="lg" />
                <Text>Loading your messages...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
                <Text color="red.500">Error loading messages! Please try again later.</Text>
            </Box>
        );
    }

    return (
        <HStack align="stretch" spacing={4}>
            <Box w="30%" p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="xl" fontWeight="bold" mb={4}>Chats</Text>
                <VStack spacing={2} align="start">
                    {conversations.length > 0 ? (
                        conversations.map(([user, chatThingId], index) => (
                            <Button
                                key={index}
                                variant={selectedChat === user ? "solid" : "outline"}
                                colorScheme="blue"
                                width="100%"
                                onClick={() => handleSelectChat(user)}
                            >
                                {getThingTitle(chatThingId)}
                            </Button>
                        ))
                    ) : (
                        <Text>No conversations yet</Text>
                    )}
                </VStack>
            </Box>

            <Box w="70%" p={6} bg="gray.50" borderRadius="md" boxShadow="lg">
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    {selectedChat ? `Chat about ${getThingTitle(thingId)}` : "Select a conversation"}
                </Text>

                {selectedChat && (
                    <VStack spacing={4} align="start" mb={4}>
                        {messages
                            .filter(
                                (msg) =>
                                    (msg.senderId === userId && msg.recipientId === selectedChat) ||
                                    (msg.senderId === selectedChat && msg.recipientId === userId)
                            )
                            .map((msg, index) => (
                                <Box key={index} p={4} bg="white" borderRadius="md" boxShadow="sm" width="100%">
                                    <Text fontWeight="bold">
                                        {msg.senderId === userId ? 'You' : `User ${msg.senderId}`}: {msg.content}
                                    </Text>
                                </Box>
                            ))}

                        <Textarea
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="Type your message..."
                            size="lg"
                            mb={4}
                        />
                        <Button colorScheme="blue" onClick={sendMessageHandler} isLoading={sending}>
                            Send Message
                        </Button>
                    </VStack>
                )}
            </Box>
        </HStack>
    );
}
