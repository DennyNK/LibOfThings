import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext.js";

export default function Header() {

  const { email } = useContext(UserContext);

  return (
    <Box bg="peach.300" px={6} py={4} color="purple.400">
      <Flex align="center" justify="space-between">

        <Box fontSize="xl" fontWeight="bold">
          Library of things
        </Box>

        {/* <Spacer /> */}


        <Flex gap={4} align="center" justify="center" flex="1">
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

          <Link to='/search'>
          <Button
            bg="purple.500"
            color="white"
            _hover={{ bg: "purple.400" }}
            variant="ghost"
          >
            Search
          </Button>
          </Link>

          {email && (<Link to='/add'>
            <Button
              bg="purple.500"
              color="white"
              _hover={{ bg: "purple.400" }}
              variant="ghost"
            >
              Add things
            </Button>
            </Link>)}

            </Flex>
          
          {email 
          ? (
          <div id="user">

            <Link to='/logout'>
            <Button
              bg="coral.500"
              color="white"
              _hover={{ bg: "coral.400" }}
              variant="solid"
            >
              Logout
            </Button>
            </Link>
            

              <Button
                bg="coral.800"
                color="white"
                _hover={{ bg: "coral.400" }}
                variant="solid"
              >
                My profile
              </Button>

            </div>)
          : ( 
          <div id="guest">

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
              bg="coral.800"
              color="white"
              _hover={{ bg: "coral.400" }}
              variant="solid"
            >
              Join
            </Button>
            </Link>

            </div>)
          }

          
      


       

        
      </Flex>
    </Box>
  );
};

