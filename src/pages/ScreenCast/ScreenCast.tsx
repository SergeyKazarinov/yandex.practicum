import { memo } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import s from './ScreenCast.module.css';
import { pageVariants } from '../../shared/config/pageVariants';

const ScreenCast = () => (
  <motion.section className={s.screenCast}
    variants={pageVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <ReactPlayer
      url='https://www.dropbox.com/scl/fi/5542itv3w5od6gc5rdkhi/Button.mp4?rlkey=a7gs5r16uz4wt9scq08317j45&dl=0'
      controls
      width=''
    />
    <button className={s.button} >Кнопка</button>
  </motion.section>
);

export default memo(ScreenCast);
