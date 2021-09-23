import React, { useState, useMemo } from 'react'
import './App.css';
import { Container, CssBaseline, Paper } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import ListItemsScreen from './screens/ListItemsScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ColorModeContext from './context/ColorModeContext';
import theme from './theme'

function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  )
  const currentTheme = useMemo(() => theme(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline/>
        <Header />
        <Container maxWidth="xs">
          <Paper sx={{ mt: 2 }}>
            <ListItemsScreen />
          </Paper>
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
