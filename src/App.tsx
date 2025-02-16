import { useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { ColorContext } from './theme/ColorContext';
import { darkTheme, lightTheme } from './theme/theme'
import { createTheme, CssBaseline, PaletteMode } from '@mui/material';

import Home from './components/Home'

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default App
