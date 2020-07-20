import React from "react";
import Link from "next/link";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      position="sticky"
      top="0"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem 1.5rem 0rem 1.5rem"
      bg="white"
      color="white"
      zIndex="1"
      {...props}
    >
      <Flex align="center" mr={2}>
        <Heading as="h1" size="sm"></Heading>
      </Flex>
      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg fill="black" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        display={{ sm: show ? "inline-block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItems>
        <MenuItems>
          <Link href="/random">
            <a>Horrify Me</a>
          </Link>
        </MenuItems>
        <MenuItems>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </MenuItems>
      </Box>
    </Flex>
  );
};

export default Header;
