import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="peach.500" px={6} py={4} color="white">
      <Flex align="center">

        <Box fontSize="xl" fontWeight="bold">
          Library of things
        </Box>

        <Spacer />


        <Flex gap={4} align="center">
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Home
          </Button>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            About
          </Button>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Catalog
          </Button>
        </Flex>


        <Spacer />
        <Button
          bg="coral.500"
          color="white"
          _hover={{ bg: "coral.400" }}
          variant="solid"
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
