import { Box, FormControl, FormLabel, Input, Button, Text, Link, } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export default function Login() {

    const navigate = useNavigate();

    // Function to handle login (you can add your form submission logic here)
    const handleLogin = (e) => {
      e.preventDefault();
      // Here you can add your login logic (e.g., API request)
      console.log('Logged in');
    };

   return (
   
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="teal.500" mb={6}>
          Login
        </Text>
  
        {/* Login Form */}
        <Box as="form" onSubmit={handleLogin} width="100%">
          {/* Username Field */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" placeholder="Enter your username" />
          </FormControl>
  
          {/* Password Field */}
          <FormControl mb={6} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Enter your password" />
          </FormControl>
  
          {/* Login Button */}
          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            mb={4}
            _hover={{ bg: 'teal.600' }}
          >
            Login
          </Button>
        </Box>
  
        {/* Link to Register Page */}
        <Text fontSize="sm">
          No account?{' '}
          <Link color="teal.500" onClick={() => navigate('/register')}>
            Click here
          </Link>
        </Text>
      </Box>
    );

}