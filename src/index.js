import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from "react-router-dom";
import { theme } from './styles/theme/index.js';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode >
);

