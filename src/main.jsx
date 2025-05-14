import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline /> */}
      <ThemeContextProvider>
      <App />
      </ThemeContextProvider>
    {/* </ThemeProvider> */}
  </BrowserRouter>
  // </StrictMode>,
)
