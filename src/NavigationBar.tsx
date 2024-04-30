import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  VStack,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaDiscord, FaBars } from 'react-icons/fa'; // Importing Discord icon from FontAwesome
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import { Link as RouterLink } from 'react-router-dom'; // Importing Link from react-router-dom for internal navigation

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manage drawer state

  // Check if the window width is less than 768px (sm)
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  // Navigation items array for cleaner mapping
  const navItems = [
    { label: 'About 7k', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Play', path: '/play' },
    { label: 'Forums', path: '/forums' },
    { label: 'Community', path: '/community' },

  ];

  return (
    <>
      <Flex
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        justifyContent="center" // center instead of space-between
        width="100%"
        p="0.2"
        zIndex="1"
        bg="black"
        alignItems="center"
      >
        <RouterLink to="/">
          <Image
            src="/src/assets/7kixon.png"
            alt="Logo"
            height="40px"
            cursor="pointer"
            mr={8}
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.1)' }}
          />
        </RouterLink>
        {isMobile ? (
          <IconButton
            aria-label="Open sidebar"
            icon={<FaBars />}
            onClick={onOpen}
            colorScheme="black"
          />
        ) : (
          <>
            {navItems.map((item, index) => (
              <RouterLink key={index} to={item.path}>
                <Button width="120px" colorScheme="yellow" variant="ghost" mx="0.5" fontSize="lg">
                  {item.label}
                </Button>
              </RouterLink>
            ))}
            <a
              href="https://discord.gg/E2wWvrR"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
      <Button leftIcon={<FaDiscord />} size="lg" variant="ghost" colorScheme="whiteAlpha" ml={1}
        border="1px solid transparent"
        _hover={{
          background: "transparent",
          color: "white",
          //borderColor: "white",
          borderWidth: "1px",
          borderStyle: "solid"
        }}
        title="Join us on Discord!" // Add the tooltip here
        >
        Discord
      </Button>
            </a>
          </>
        )}
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems="flex-start">
              {navItems.map((item, index) => (
                <RouterLink key={index} to={item.path}>
                  <Button width="100%" colorScheme="yellow" variant="ghost">
                    {item.label}
                  </Button>
                </RouterLink>
              ))}
              <a
                href="https://discord.gg/E2wWvrR"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
      <Button leftIcon={<FaDiscord />} size="lg" variant="ghost" colorScheme="whiteAlpha" ml={1}
        border="1px solid transparent"
        _hover={{
          background: "transparent",
          color: "white",
          //borderColor: "white",
          borderWidth: "1px",
          borderStyle: "solid"
        }}
        title="Join us on Discord!" // Add the tooltip here
        >
        Discord
      </Button>
              </a>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationBar;
