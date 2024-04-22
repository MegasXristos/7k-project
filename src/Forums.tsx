// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, VStack, Image, Grid, Text } from '@chakra-ui/react';
import NavigationBar from './NavigationBar'; // Adjust the path as necessary

function App() {
  const [iframeUrl, setIframeUrl] = useState('');
  const [hoveredButton, setHoveredButton] = useState('');

  useEffect(() => {
    // Existing scroll effect logic
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      document.body.style.backgroundColor = `rgb(${Math.round(scrollPercentage * 255)}, ${Math.round(scrollPercentage * 128)}, 0)`;
    };

    document.body.style.backgroundColor = 'black';
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <VStack spacing={10}>
        <NavigationBar setUrl={setIframeUrl} />
        {/* Conditional rendering of the iframe or the main content */}
        {iframeUrl ? (
          <iframe src={iframeUrl} style={{ width: '100%', height: '90vh', border: 'none' }}></iframe>
        ) : (
          // Existing content layout
          <Box height="200vh" paddingTop="100px">
            <Grid templateColumns="repeat(2, 1fr)" gap={0} borderColor="gray.200" borderRadius="md" p={4}>
              {/* Content boxes repeated as needed */}
            </Grid>
          </Box>
        )}
      </VStack>
    </Router>
  );
}

export default App;
