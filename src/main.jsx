import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme.js'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </StrictMode>,
)
