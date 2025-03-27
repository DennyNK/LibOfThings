import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth.js";

export default function Header() {

  const { isAuthenticated, email } = useAuth();


  return (
    <Box bg="peach.300" px={6} py={4} color="purple.400">
      <Flex align="center" justify="space-between">

        <Box fontSize="xl" fontWeight="bold">
          Library of things
        </Box>

        <Spacer />


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

          {isAuthenticated && (<Link to='/add'>
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


        <Spacer />
        {isAuthenticated
          ? (
            <div id="guest">
              <Box display="inline-block" mr="0.3cm">
              {`Welcome, ${email}`}
              </Box>

              <Link to='/profile'>
                <Button
                  bg="coral.800"
                  color="white"
                  _hover={{ bg: "coral.400" }}
                  variant="solid"
                >
                  My profile
                </Button>
              </Link>

              <Link to='/messages'>
                <Button
                  bg="coral.800"
                  color="white"
                  _hover={{ bg: "coral.400" }}
                  variant="solid"
                >
                  Messages
                </Button>
              </Link>

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

            </div>
          )
          : (
            <div id="user">
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
            </div>
          )

        }


      </Flex>
    </Box>
  );
};

