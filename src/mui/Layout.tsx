import * as React from 'react';
import Container from '@mui/material/Container';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Layout;
