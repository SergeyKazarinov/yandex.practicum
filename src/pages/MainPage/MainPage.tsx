import { memo } from 'react';
import Main from '../../components/Main/Main';
import About from '../../components/About/About';

const MainPage = () => (
    <>
      <Main />
      <About />
    </>
);

export default memo(MainPage);
