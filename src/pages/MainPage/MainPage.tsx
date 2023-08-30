import { memo } from 'react';
import { motion } from 'framer-motion';
import Main from '../../components/Main/Main';
import About from '../../components/About/About';
import { pageVariants } from '../../shared/config/pageVariants';

const MainPage = () => (
    <motion.div
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'

    >
      <Main />
      <About />
    </motion.div>
);

export default memo(MainPage);
