import React from 'react';
import { Button, VStack, Center, Text, Box } from '@chakra-ui/react';

function Play() {
  return (
    <Center h="100vh">
      <VStack spacing={10}>
      <Text fontSize="6xl" fontWeight="bold" color="orange">Play Now</Text>
        <Button
          colorScheme="yellow"
          size="lg"
          title="Latest version 2.15.6"
          sx={{
            animation: "zoomInOut 3s infinite" // Ensure you have defined the keyframes in your CSS
                        // Define the keyframes inline
                        ,'@keyframes zoomInOut': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.1)' },
                          '100%': { transform: 'scale(1)' }
                        }
          }}
        >
          Download & Play Now
        </Button>
        
        <Text fontSize="xl" color="orange" mt={-4} sx={{
          opacity: 0,
          animation: "slideFromBottom 1.5s forwards",
          animationDelay: "1s",  // Delays the text animation until after the button has been seen
          '@keyframes slideFromBottom': {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 }
          }
        }}>
          for free!
        </Text>
        <Box
          p={5}
          boxShadow="md"
          bgGradient="linear(to-r, orange.400, yellow.300)" // Applying the gradient as in the HomePage example
          borderRadius="md"
          w="80%"
        >
          <Text fontSize="sm" textAlign="left">
            <strong>Minimum Requirements:</strong>
            <br />Operating System: Windows 98 / ME / 2000 / XP / Vista / 7
            <br />Processor: 1.0 GHz Processor
            <br />Memory: 128 MB RAM
            <br />Graphics: 100% DirectX compatible graphics
            <br />Storage: 200 MB available space
            <br />Sound Card: 100% DirectX compatible card or onboard sound
            <br /><br /><strong>Recommended:</strong>
            <br />Operating System: Windows 98 / ME / 2000 / XP / Vista / 7
            <br />Processor: 1.5 GHz Processor
            <br />Memory: 256 MB RAM
            <br />Graphics: 100% DirectX compatible graphics
            <br />Storage: 200 MB available space
            <br />Sound Card: 100% DirectX compatible card or onboard sound
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default Play;
