import * as React from 'react';
import Container from '@mui/material/Container';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
