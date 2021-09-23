import './App.css';
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import ListItemsScreen from './screens/ListItemsScreen'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <ListItemsScreen />
      </Container>
    </ThemeProvider>
  );
}

export default App;
