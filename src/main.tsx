import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './HomePage';

const container = document.getElementById('root')!;
const root = createRoot(container);  // Now TypeScript knows `container` is not null

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
        <HomePage />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
