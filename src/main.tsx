import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage';
import NavigationBar from './NavigationBar';
import About7k from './About7k';
import ExternalLinkFrame from './ExternalLinkFrame';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About7k />} />
          <Route path="/forums" element={<ExternalLinkFrame url="https://7kfans.com/forums/" />} />
          {/* Define routes for other pages here */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
