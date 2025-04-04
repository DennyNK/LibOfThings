import { useState, useEffect } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea, Text } from '@chakra-ui/react';
import { useOneThing } from "../../api/thingsApi";
import { useNavigate } from "react-router";
import { useSendMessage } from "../../api/messagesApi.js";

export default function ContactUserModal({ isOpen, onClose, thingId, recipientId }) {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { sendMessage, sending } = useSendMessage();
    const { thing, error } = useOneThing(thingId); 

    useEffect(() => {
        if (!thing) return; 
    }, [thing]);

    const submitHandler = async (e) => {
        e.preventDefault();
    
    const success = await sendMessage({
        thingId,
        recipientId,
        content: message
    });

    if (success) {
        setMessage(""); 
        onClose(); 
        navigate(`/messages?thingId=${thingId}`, { state: { selectedChat: recipientId } });
    }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Send Message to the Owner about {thing.title}</ModalHeader>
                <ModalBody>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        size="lg"
                        mb={4}
                    />
                </ModalBody>
                {error && (
                            <Text color="red.500" textAlign="center" mt={4}>
                              {error}
                            </Text>
                          )}
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        onClick={submitHandler}
                        isLoading={sending}
                    >
                        Send Message
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
