// In your InfoBox.jsx or InfoBox.tsx
import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

function InfoBox({ text, imageUrl }) {
  return (
    <Flex border="1px" borderColor="gray.200" borderRadius="md" p={4} align="center" justify="space-between">
      <Box p={4} 
           width="50%" 
           bgGradient="linear(to-r, orange.400, yellow.300)" // Metallic-like gradient
           borderRadius="md">
        <Text fontSize="lg" color="black">{text}</Text>
      </Box>
      <Box flex="1" overflow="hidden" borderRadius="md">
        <Image 
          src={imageUrl} 
          width="100%" 
          height="100%" 
          objectFit="cover" 
          borderRadius="md" 
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: 'scale(1.2)' }}
        />
      </Box>
    </Flex>
  );
}

export default InfoBox;
