import { createTheme } from '@mui/material/styles';
import { common, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Playfair Display', 'serif'].join(','),
    h1: {
      '@media (max-width:600px)': {
        fontSize: '4.5rem',
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
