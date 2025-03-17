import { Box, Flex, Text, Link } from '@chakra-ui/react';

export default function Footer() {
   return (
    <Box bg="peach.500" color="white" py={4}>
    <Flex justify="center" direction="column" align="center">
      <Text fontSize="sm">
        &copy; 2025 My Website. All rights reserved.
      </Text>
      <Flex mt={2} gap={4}>
        <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
        <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>
          Terms of Service
        </Link>
        <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>
          Contact Us
        </Link>
      </Flex>
    </Flex>
  </Box>
   );
}