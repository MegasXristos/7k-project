// NavigationBar.tsx
import React, { useState } from 'react';
import { Box, Button, Flex, VStack, Image} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';  // Importing Discord icon from FontAwesome
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import { Link as RouterLink } from 'react-router-dom'; // Importing Link from react-router-dom for internal navigation



const NavigationBar = () => {
  // Navigation items array for cleaner mapping
  const navItems = [
    { label: 'About 7k', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Play', path: '/play' },
    { label: 'Forums', path: '/forums' },
    { label: 'Community', path: '/community' },
    { label: 'Downloads', path: '/downloads' }
  ];

  return (
    <Flex as="nav" position="fixed" top="0" left="0" right="0" justifyContent="center" width="100%" p="4" zIndex="1" bg="black">
    <RouterLink to="/">
      <Image
        src="/src/assets/7kixon.png"
        alt="Logo"
        mr={10}
        height="40px"
        cursor="pointer"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: 'scale(1.3)' }}
      />
    </RouterLink>
    {navItems.map((item, index) => (
      <Box key={index} mx={2}>
        <RouterLink to={item.path}>
          <Button width='210px' colorScheme="yellow">{item.label}</Button>
        </RouterLink>
      </Box>
    ))}
    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginLeft: '8px' }}>
      <Button leftIcon={<FaDiscord />} size="lg" variant="ghost" colorScheme="whiteAlpha" ml={6}
        border="1px solid transparent"
        _hover={{
          background: "transparent",
          color: "white",
          borderColor: "white",
          borderWidth: "1px",
          borderStyle: "solid"
        }}
        title="Join us on Discord!" // Add the tooltip here
        >
        Discord
      </Button>
    </a>
  </Flex>
);
};

export default NavigationBar;
