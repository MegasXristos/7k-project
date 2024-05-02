import React, { useEffect } from 'react';
import { Button, VStack, Center, Text, Box, Grid, Image, useBreakpointValue } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Play() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // Controls the speed of the animations
      once: false, // Animations will trigger every time the element comes into view
      offset: 20,    // Reduced offset for earlier animation trigger
    });
    document.body.style.backgroundColor = 'black';
  }, []);

  // Responsive grid template columns
  const gridTemplateColumns = useBreakpointValue({ 
    base: "1fr", // Single column stack on smaller screens
    md: "1fr 1fr", // Equal split on medium screens
    lg: "1.5fr 2.5fr" // More space for content than image on large screens
  });

  // Specific grid template columns for the second box where the image is on the left
  const gridTemplateColumnsImageLeft = useBreakpointValue({
    base: "1fr", // Single column on small screens
    md: "1fr 1fr", // Equal split on medium screens
    // lg: "1.5fr 1.5fr" // Equal split on large screens, making image and text equally balanced
    lg: "1.5fr 1.8fr" // Equal split on large screens, making image and text equally balanced
  });

  return (
    <VStack spacing={10}>
      <Center h="100vh">
        <VStack spacing={10}>
          <Text fontSize="6xl" fontWeight="bold" color="orange" data-aos="fade-up" data-aos-delay="50">
            Play Now
          </Text>
          <Button
            colorScheme="yellow"
            size="lg"
            title="Latest version 2.15.6"
            sx={{
              animation: "zoomInOut 3s infinite",
              '@keyframes zoomInOut': {
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
            animationDelay: "1s",
            '@keyframes slideFromBottom': {
              '0%': { transform: 'translateY(20px)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 }
            }
          }}>
            for free!
          </Text>
        </VStack>
      </Center>
      <Box height="auto" paddingTop="100px" data-aos="zoom-in" data-aos-delay="50">
        <Grid templateColumns={gridTemplateColumns} gap={6} borderColor="gray.200" borderRadius="md" p={4}>
          <Box overflow="hidden" borderRadius="md">
            <Image 
              src="/src/assets/pc90.webp" // Adjust the path as needed
              objectFit="contain" // Ensures the image is scaled correctly within its container
              maxW="100%" // Allows the image to fill the space designated by grid column ratio
              maxH="100%" // Limits the height to 100% of its container
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.2)' }}
            />
          </Box>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-up" data-aos-delay="50">
            <Text fontSize="xl" textAlign="left">
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
        </Grid>
      </Box>
    </VStack>
  );
}

export default Play;
