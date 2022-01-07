import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex
        h={"3em"}
        bg={"green.300"}
        lineHeight={"3em"}
        pl={"2em"}
        bgGradient="linear(to-r, green.400, green.300)"
        boxShadow="xl"
      >
        <Box
          color="white"
          fontWeight={"Bold"}
          textShadow={" -1px 1px #3f3f3f"}
          _hover={{
            textShadow: "-1px 2px #3f3f3f",
          }}
        >
          Self-Love Library
        </Box>
        <Spacer />
        <Box pr={"1em"}>
          <Flex h="3em" alignItems={"center"}>
            <Button colorScheme="green" bg="green.400" color="white" mr="4">
              Sign Up
            </Button>
            <Button colorScheme="green" bg="green.100" color="green">
              Log in
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
