import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendBaseTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const outline = defineStyle({
  border: '3px dashed',
  borderRadius: 10,
  fontWeight: 'semibold',
  backgroundColor: 'red'
})

export const buttonTheme = defineStyleConfig({
  variants: { outline },
})

const theme = extendBaseTheme({
  colors,
  components: {
    Button: buttonTheme
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} cssVarsRoot='#root'>      
      <App />      
    </ChakraProvider>
  </React.StrictMode>,
)
