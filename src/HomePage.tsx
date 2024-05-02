import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex, VStack, Image, Grid, Text, Center,useBreakpointValue } from '@chakra-ui/react';
import NavigationBar from './NavigationBar'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { ChevronDownIcon } from '@chakra-ui/icons';

function HomePage() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // controls the speed of the animations
      once: false, // Animations will trigger every time the element comes into view
      offset: 20,    // Reduced offset for earlier animation trigger
    });

    
    // Handle dynamic background color based on scroll position
    // const handleScroll = () => {
    //   const scrollTop = document.documentElement.scrollTop;
    //   const scrollHeight = document.documentElement.scrollHeight;
    //   const clientHeight = document.documentElement.clientHeight;
    //   const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    //   const colorIntensity = Math.round(scrollPercentage * 255);
    //   const greenComponent = Math.round(scrollPercentage * 128);

    //   // Set the background color dynamically based on scroll position
    //   document.body.style.backgroundColor = `rgb(${colorIntensity}, ${greenComponent}, 0)`;
    });


    // Set initial background color before any scrolling occurs
    document.body.style.backgroundColor = 'rgb(0, 0, 0)'; // Starting with a black background

      // Responsive grid template columns
      const gridTemplateColumns = useBreakpointValue({
        base: "1fr", // Single column on small screens
        md: "1fr 1fr", // Two columns on medium screens
        lg: "1.5fr 1.2fr" // Gives more space to the text on large screens
      });

        // Specific grid template columns for the second box where the image is on the left
      const gridTemplateColumnsImageLeft = useBreakpointValue({
        base: "1fr", // Single column on small screens
        md: "1fr 1fr", // Equal split on medium screens
        // lg: "1.5fr 1.5fr" // Equal split on large screens, making image and text equally balanced
        lg: "1.5fr 1.8fr" // Equal split on large screens, making image and text equally balanced
      });

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    
    <>
    <style>
      {`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scroll-down-animation {
          animation: bounce 2s infinite;
        }
      `}
    </style>

    <VStack spacing={10} position="relative" minHeight="100vh">
    <Center h="80vh">
      <Box paddingTop="100px">
      <Grid templateColumns={gridTemplateColumnsImageLeft} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
        </Grid>
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      </Center>
            {/* Scroll Down Indicator */}
            <Text color="orange" mb="-8">SCROLL DOWN</Text>
            <Center height="30px">
        <ChevronDownIcon w={12} h={12} color="orange" className="scroll-down-animation" />
      </Center>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
      <Grid templateColumns={gridTemplateColumnsImageLeft} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
        </Grid>
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
      <Grid templateColumns={gridTemplateColumnsImageLeft} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
          <Box overflow="hidden" borderRadius="md" data-aos="zoom-in">
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
          <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
            <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
              A long, long time ago, when people lived among gods and monsters, seven kingdoms struggled for rule over the land. Lead one of those civilizations to glory through sophisticated trade, diplomacy, espionage, and conquest. Choose from one of seven cultures: Greek, Persian, Viking, Norman, Mayan, Chinese, and Japanese and compete for domination.
            </Text>
          </Box>
        </Grid>
        {/* Additional content and grids can be added below with similar AOS attributes */}
      </Box>
      <Box height="85vh" paddingTop="100px">
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
        <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={4}>
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
      <Grid templateColumns={gridTemplateColumns} gap={0} borderColor="gray.200" borderRadius="md" p={0}>
  <Box bgGradient="linear(to-r, orange.400, yellow.300)" borderRadius="md" p={4} data-aos="fade-right">
    <Text fontSize="2xl" color="black" data-aos="fade-up" data-aos-delay="50">
      <br/>“…I sat down to play Seven Kingdoms. Eight hours later I was thoroughly convinced of designer Trevor Chan's genius”<br/>
      9/10 – PC Gamer“ <br/><br/> “There hasn't been an empire-builder this good since Civilization II...Seven Kingdoms is an outstanding game in every way. Seven Kingdoms delivers on the promises made by Age of Empires by creating a real-time meld of Civilization-type empire building and WarCraft-style combat, with enough unique twists to make it more than a mere hybrid.”<br/>
      8.9/10 – Game Spot
    </Text>
  </Box>
  <Box overflow="hidden" borderRadius="md" data-aos="fade-right">
    <Image 
      src="/src/assets/reviews1.webp" 
      width="70%" 
      height="auto" 
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
    </>
  );
}

export default HomePage;
