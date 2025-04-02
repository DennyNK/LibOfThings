import { Box, FormControl, FormLabel, Input, Button, Text, Link, } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useLogin } from '../../api/authApi.js';
import { useActionState, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function Login() {

    const navigate = useNavigate();
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState("");


    const loginHandler = async (_, formData) => {
      try { const values = Object.fromEntries(formData);
        

        const authData = await login(values.email, values.password)

        userLoginHandler(authData);

        navigate('/catalog');
        
        return values;}
        catch(err){
          console.log(err);
          setErrorMessage('Login failed, please try again')
        }
    };

    // eslint-disable-next-line no-unused-vars
    const [_, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});

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
        <Text fontSize="2xl" fontWeight="bold" color="purple.500" mb={6}>
          Login
        </Text>
  
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}

        <Box as="form" action={loginAction} width="100%">

          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" name="email" placeholder="Enter your email" />
          </FormControl>
  

          <FormControl mb={6} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" name="password" placeholder="Enter your password" />
          </FormControl>
  

          <Button
            type="submit"
            colorScheme="purple"
            width="full"
            mb={4}
            _hover={{ bg: 'purple.500' }}
            className="btn submit" 
            disabled={isPending}
          >
            Login
          </Button>
        </Box>
  

        <Text fontSize="sm">
          No account?{' '}
          <Link color="coral.800" onClick={() => navigate('/register')}>
            Register here
          </Link>
        </Text>
      </Box>
    );

}