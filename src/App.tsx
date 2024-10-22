import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import IndexEN from './pages/en/index';
import Layout from './mui/Layout';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Index />}
        />
        <Route
          path="en"
          element={<IndexEN />}
        />
      </Route>
    </Routes>
  );
};

export default App;
