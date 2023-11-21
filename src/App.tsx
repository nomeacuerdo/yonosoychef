import { ThemeProvider } from '@mui/material';
import Index from './pages/index';
import theme from './mui/theme';
import Layout from './mui/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Index />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
