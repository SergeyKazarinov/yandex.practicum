import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import ScreenCast from '../../pages/ScreenCast/ScreenCast';
import Layout from '../Layout/Layout';
import JavaScriptPage from '../../pages/JavaScriptPage/JavaScriptPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/screen' element={<ScreenCast />} />
        <Route path='/js' element={<JavaScriptPage />} />
      </Route>
    </Routes>
  );
}

export default App;
