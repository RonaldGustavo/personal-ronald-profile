import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '@pages';

const PublicRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
