import { useState, useEffect, useCallback } from 'react';
import useAuth from '../hooks/useAuth';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/messages';

export const useMessages = () => {
  const { userId } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [conversations, setConversations] = useState([]);


  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      const response = await request.get(baseUrl);

      
      
      const filteredMessages = Array.isArray(response)
        ? response.filter(msg => msg.senderId === userId || msg.recipientId === userId)
        : [];

      setMessages(filteredMessages);


      const uniqueConversations = new Map();
      filteredMessages.forEach((msg) => {
        const otherUser = msg.senderId === userId ? msg.recipientId : msg.senderId;
        const thingId = msg.thingId || null; 
        
        const key = `${otherUser}-${thingId}`;

        if (!uniqueConversations.has(key)) {
          uniqueConversations.set(key, { user: otherUser, thingId });
        }
      });

      const newConversations = Array.from(uniqueConversations.values());

      
      

      setConversations(newConversations);
    
      
    } catch (err) {
      setError(err);
      console.log("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  }, [userId]); 

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]); 

  return { messages, setMessages, loading, error, conversations, refetchMessages: fetchMessages };
};

export function useSendMessage() {
    const { refetchMessages } = useMessages();
    const { userId, request } = useAuth();
    const [sending, setSending] = useState(false);

    const sendMessage = async ({ thingId, recipientId, content }) => {
        if (!content.trim() || !recipientId) return;

        setSending(true);

        try {
            const newMessage = {
                thingId,
                senderId: userId,
                recipientId,
                content,
            };

            await request.post(baseUrl, newMessage);
            await refetchMessages();
            return true; 
        } catch (error) {
            console.error("Error sending message:", error);
            return false;
        } finally {
            setSending(false);
        }
    };

    return { sendMessage, sending };
}
