// NavigationBar.tsx
import React, { useState } from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [hoveredButton, setHoveredButton] = useState('');

  return (
    <Flex position="fixed" top="0" left="0" right="0" justifyContent="center" width="100%" p="4" zIndex="1" bg="black">
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
    </Flex>
  );
};

export default NavigationBar;
