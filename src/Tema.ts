import { createTheme } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#020000',
    },
    secondary: {
      main: '#00901f',
    },
    text: {
      primary: '#1b5e20',
      secondary: '#000000',
    },
    background: {
      paper: '#E5FCF5',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Momo Trust Display"',
    button: {
      fontSize: 20,
      fontWeight: 1000,
    },
  },
});

export default tema;

