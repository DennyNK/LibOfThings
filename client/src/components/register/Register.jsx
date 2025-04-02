import { useNavigate } from 'react-router';
import { Box, FormControl, FormLabel, Input, Button, Stack, Heading, Text, Link } from '@chakra-ui/react';
import { useRegister } from '../../api/authApi.js';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.js';


export default function Register() {


    const navigate = useNavigate();
    const { register, error } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState("");

    const registerHandler = async (formData) => {

     try {const {email, password, firstName, city, country, preferredLanguage } = Object.fromEntries(formData);
      const repeatPassword = formData.get('repeatPassword');

      if (!email || !password || !repeatPassword || !firstName || !city || !country) {
        setErrorMessage("All fields are required!");
        return;
      }

      if(password !== repeatPassword){
        console.log('password mismatch');
        setErrorMessage("Passwords do not match!")
        return
      };

      const authData = await register(email, password, firstName, city, country, preferredLanguage);

      // eslint-disable-next-line no-unused-vars
      const {password: _, ...secureAuthData} = authData;

      userLoginHandler(secureAuthData);

      navigate('/');}
      catch(err){
        console.log(err);
        setErrorMessage('Registration failed, please try again')
      }

    }
    
      return (
        <Box maxWidth="400px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" textAlign="center" mb={6} color="purple.500">
            Register
          </Heading>


          
          {(error || errorMessage) && (
            <Text color="red.500" textAlign="center" mt={4}>
              {error || errorMessage}
            </Text>
          )}

    
          <form action={registerHandler}>
            <Stack spacing={4}>
              <FormControl >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </FormControl>
    

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </FormControl>
    
              <FormControl>
                <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
                <Input
                  id="repeatPassword"
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat your password"
                />
              </FormControl>
    
              <FormControl>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                />
              </FormControl>
    
              <FormControl>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                />
              </FormControl>
    
              <FormControl>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  id="country"
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                />
              </FormControl>

    
              <Button colorScheme="purple" size="lg" type="submit" width="full">
                Register
              </Button>
    
            <Text fontSize="sm">
                        Have an account?{' '}
                    <Link color="coral.800" onClick={() => navigate('/login')}>
                          Login here
                    </Link>
            </Text>
            </Stack>
          </form>
        </Box>
      );
}