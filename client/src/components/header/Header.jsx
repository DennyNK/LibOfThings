import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router";

export default function Header() {
  return (
    <Box bg="peach.300" px={6} py={4} color="purple.400">
      <Flex align="center">

        <Box fontSize="xl" fontWeight="bold">
          Library of things
        </Box>

        <Spacer />


        <Flex gap={4} align="center">
          <Link to='/'>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Home
          </Button>
          </Link>
          <Link to='/about'>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            About
          </Button>
          </Link>

          <Link to='/catalog'>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Catalog
          </Button>
          </Link>

          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Add things
          </Button>
        </Flex>


        <Spacer />
        <Link to='/login'>
        <Button
          bg="coral.500"
          color="white"
          _hover={{ bg: "coral.400" }}
          variant="solid"
        >
          Login
        </Button>
        </Link>

        <Link to='/register'>
        <Button
          bg="coral.500"
          color="white"
          _hover={{ bg: "coral.400" }}
          variant="solid"
        >
          Join
        </Button>
        </Link>

        <Button
          bg="coral.500"
          color="white"
          _hover={{ bg: "coral.400" }}
          variant="solid"
        >
          My profile
        </Button>
      </Flex>
    </Box>
  );
};

