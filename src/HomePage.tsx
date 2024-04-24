import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex, VStack, Image, Grid, Text } from '@chakra-ui/react';
import NavigationBar from './NavigationBar'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function HomePage() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // controls the speed of the animations
      once: false, // Animations will trigger every time the element comes into view
      offset: 20,    // Reduced offset for earlier animation trigger
    });

    
    // Handle dynamic background color based on scroll position
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const colorIntensity = Math.round(scrollPercentage * 255);
      const greenComponent = Math.round(scrollPercentage * 128);

      // Set the background color dynamically based on scroll position
      document.body.style.backgroundColor = `rgb(${colorIntensity}, ${greenComponent}, 0)`;
    };


    // Set initial background color before any scrolling occurs
    document.body.style.backgroundColor = 'rgb(0, 0, 0)'; // Starting with a black background

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <VStack spacing={10}>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns="1fr 1fr" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
    </VStack>
  );
}

export default HomePage;
