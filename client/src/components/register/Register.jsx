import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, FormControl, FormLabel, Input, Button, Stack, Heading, FormErrorMessage, Select, Text, Link } from '@chakra-ui/react';


export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        city: '',
        country: '',
        preferredLanguage: '',
      });
    
      const [errors, setErrors] = useState({});
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validateForm = () => {
        let formErrors = {};
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.repeatPassword) formErrors.repeatPassword = 'Passwords must match';
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.city) formErrors.city = 'City is required';
        if (!formData.country) formErrors.country = 'Country is required';
        if (!formData.preferredLanguage) formErrors.preferredLanguage = 'Preferred Language is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Submit form data (you can handle the submission logic here)
          console.log('Form Submitted', formData);
        }
      };
    
      return (
        <Box maxWidth="400px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Register
          </Heading>
    
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Email Field */}
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
    
              {/* Password Field */}
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
    
              {/* Repeat Password Field */}
              <FormControl isInvalid={errors.repeatPassword}>
                <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
                <Input
                  id="repeatPassword"
                  type="password"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  placeholder="Repeat your password"
                />
                <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage>
              </FormControl>
    
              {/* Name Field */}
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
    
              {/* City Field */}
              <FormControl isInvalid={errors.city}>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                />
                <FormErrorMessage>{errors.city}</FormErrorMessage>
              </FormControl>
    
              {/* Country Field */}
              <FormControl isInvalid={errors.country}>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  id="country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                />
                <FormErrorMessage>{errors.country}</FormErrorMessage>
              </FormControl>
    
              {/* Preferred Language Field */}
              <FormControl isInvalid={errors.preferredLanguage}>
                <FormLabel htmlFor="preferredLanguage">Preferred Language</FormLabel>
                <Select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleInputChange}
                  placeholder="Select your preferred language"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="chinese">Chinese</option>
                </Select>
                <FormErrorMessage>{errors.preferredLanguage}</FormErrorMessage>
              </FormControl>
    
              {/* Submit Button */}
              <Button colorScheme="teal" size="lg" type="submit" width="full">
                Register
              </Button>
    
              {/* Redirect to Login */}
            <Text fontSize="sm">
                        Have an account?{' '}
                    <Link color="teal.500" onClick={() => navigate('/login')}>
                          Login here
                    </Link>
            </Text>
            </Stack>
          </form>
        </Box>
      );
}