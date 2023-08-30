import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from '../../pages/MainPage/MainPage';
import ScreenCast from '../../pages/ScreenCast/ScreenCast';
import Layout from '../Layout/Layout';
import JavaScriptPage from '../../pages/JavaScriptPage/JavaScriptPage';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/screen' element={<ScreenCast />} />
          <Route path='/js' element={<JavaScriptPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
