import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import theme from './theme';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
