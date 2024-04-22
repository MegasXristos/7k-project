import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Button, Flex, VStack, Image, Grid, Text } from '@chakra-ui/react';
import NavigationBar from './NavigationBar'; // Adjust the path as necessary

function App() {
  const [hoveredButton, setHoveredButton] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const colorIntensity = Math.round(scrollPercentage * 255);
      const greenComponent = Math.round(scrollPercentage * 128);

      // Set the background color with the adjusted green component
      document.body.style.backgroundColor = `rgb(${colorIntensity}, ${greenComponent}, 0)`;
    };

    // Set initial background color to black
    document.body.style.backgroundColor = 'black';

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

      <VStack spacing={10}>


        {/* Scrollable Content Area with Grid Layout */}
        <Box height="200vh" paddingTop="100px">
          <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
            <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4}>
              <Text fontSize="2xl" color="black">
                A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
              </Text>
            </Box>
            <Box overflow="hidden" borderRadius="md">
              <Image 
                src="/src/assets/logo.jpg" 
                width="100%" 
                height="100%" 
                objectFit="cover" 
                borderRadius="md" 
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.2)' }}
              />
            </Box>
          </Grid>

          {/* Repeat the Grid for the second item */}
          <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
            <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4}>
              <Text fontSize="2xl" color="black">
                Each Race in Seven Kingdoms has its own distinct advantages and disadvantages, its own unique God unit, a different military skill, its own strengths and weaknesses. Learn how to use them! Use military means, economy or subterfuge to bring down your enemies. And don't forget about brute force, cunning, and intelligence.
              </Text>
            </Box>
            <Box overflow="hidden" borderRadius="md">
              <Image 
                src="/src/assets/scs1.jpg" 
                width="100%" 
                height="100%" 
                objectFit="cover" 
                borderRadius="md" 
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.2)' }}
              />
            </Box>
          </Grid>
          <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
            <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4}>
              <Text fontSize="2xl" color="black">
                Conquer the world and build your empire!
              </Text>
            </Box>
            <Box overflow="hidden" borderRadius="md">
              <Image 
                src="/src/assets/scs2.jpg" 
                width="100%" 
                height="100%" 
                objectFit="cover" 
                borderRadius="md" 
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.2)' }}
              />
            </Box>
          </Grid>
        </Box>
      </VStack>

  );
}

export default App;
