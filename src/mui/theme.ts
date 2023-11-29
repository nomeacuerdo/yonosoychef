import { createTheme } from '@mui/material/styles';
import { common, red } from '@mui/material/colors';

const xs = '@media (max-width:600px)';
// Create a theme instance.
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '600px',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          [xs]: {
            width: '80vw',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ['Playfair Display', 'serif'].join(','),
    h1: {
      [xs]: {
        fontSize: '3.5rem',
      },
    },
    h3: {
      [xs]: {
        fontSize: '2.5rem',
      },
    },
  },
  palette: {
    primary: {
      main: common.black,
    },
    secondary: {
      main: common.white,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
