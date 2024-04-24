// NavigationBar.tsx
import React, { useState } from 'react';
import { Box, Button, Flex, VStack, Image} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';  // Importing Discord icon from FontAwesome
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom


const NavigationBar = () => {
  const [hoveredButton, setHoveredButton] = useState('');

  return (
    <Flex position="fixed" top="0" left="0" right="0" justifyContent="center" width="100%" p="4" zIndex="1" bg="black">
      <Link to="/">
    <Image
        src="/src/assets/7kixon.png" // Set the correct path to your image
        alt="Logo"
        mr={10} // Margin right to space out from buttons
        height="40px" // Set the height according to your design
        cursor="pointer"
        transition="transform 0.3s ease-in-out" // Smooth transition for transform changes
        _hover={{
          transform: 'scale(1.3)' // Scale up the image by 10% on hover
        }}
      />
      </Link>
      {['About 7k', 'News', 'Play', 'Forums', 'Community', 'Downloads'].map((buttonLabel, index) => (
        <Box key={index} mx={2}
             onMouseEnter={() => setHoveredButton(buttonLabel)}
             onMouseLeave={() => setHoveredButton('')}>
    <Link to={buttonLabel === 'About 7k' ? "/about" : buttonLabel === 'Forums' ? "/forums" : `/${buttonLabel.toLowerCase()}`}>
      <Button width='210px' colorScheme="yellow">{buttonLabel}</Button>
    </Link>
          
          {/* Display sub-buttons or additional content */}
        </Box>
      ))}
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginLeft: '8px' }}>
        <Button leftIcon={<FaDiscord />} size="lg" variant="ghost" colorScheme="whiteAlpha"   ml={6} // Adjusted for example
  border="1px solid transparent" // Always present but transparent
                  _hover={{
                    background: "transparent",  // Keeps background transparent on hover
                    color: "white",  // Changes text and icon color to white
                    borderColor: "white",  // Changes border color to white
                    borderWidth: "1px",  // Sets the border width
                    borderStyle: "solid"  // Sets the border style
                  }}
        >
          Discord
        </Button>
        </a>
    </Flex>
    
  );
};

export default NavigationBar;
