import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StrictMode>
    <ChakraProvider theme={theme}>

    <App />

    </ChakraProvider>
  </StrictMode>
  </BrowserRouter>,
)
