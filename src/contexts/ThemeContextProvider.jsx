import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ColorModeContext } from './ColorModeContext';

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme =  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#9c27b0',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
