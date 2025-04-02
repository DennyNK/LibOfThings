import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi.js";
import { Box, Text } from "@chakra-ui/react";

export default function Logout() {
    const { isLoggedOut, error } = useLogout();

    if (isLoggedOut) {
        return <Navigate to="/" />;
    }

    return error ? (
        <Box p={4} bg="red.100" borderRadius="md" textAlign="center">
            <Text color="red.500">{error}</Text>
        </Box>
    ) : null;
}