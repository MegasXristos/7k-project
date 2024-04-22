import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, Image, VStack } from '@chakra-ui/react';
import NavigationBar from './NavigationBar'; // Adjust the path as necessary

function About7k() {
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
              The Seven Kingdoms Fan-site is the gathering place for fans of any of the Seven Kingdoms Series computer games by Enlight Software. Here you can share details of the games and find opponents. This is also home of the community supported open source releases. You may find GPL versions of 7KAA and patches for 7K2 to improve on the longevity of this great series.
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

            # The People <br/><br/>Each culture has its own unique strengths and weaknesses. Choose any of the seven, and play against up to 6 rivals. Whatever kingdom you choose to lead, your peasants will take on their own identity. Each peasant has his own skills and loyalties, from miners and factory workers to spies, generals, scientists, and more. <br/><br/> The people in this game have been programmed with real human emotions. They will have conflicting or complimentary loyalties to their commanders, to their kings and to their ethnic groups. They will have the potential to rebel against unjust rule and to turn traitor and join the forces of a more just king. Or they may do the same, but only for the love of money. <br/><br/> Treat your people well, keep them fed, give them grants and medals, and promote the best of them to higher ranks, and they will remain steadfast, loyal, and efficient. Treat them poorly, overtax them, starve them, or earn a reputation as a militaristic tyrant, and their loyalty will suffer. And when loyalty is low, rebellion may soon follow.
              <br/><br/>As your kingdom grows, peasants from other cultures will become your subjects. Whether by military conquest of other villages, or by simple persuasion, these foreigners will join your empire, bringing with them their unique talents. But with diversity comes new challenges ...

Show favoritism to subjects of one culture, and watch as the loyalty of others rapidly declines. Each must be treated as an equal if unrest and rebellion are to be avoided. Lead them wisely, though, and your subjects will unite to form a mighty empire destined to rule the world.
            </Text>
            {/* Add the rest of the text for "The People" here */}
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
    //Test Test Test
  );
}

export default About7k;
