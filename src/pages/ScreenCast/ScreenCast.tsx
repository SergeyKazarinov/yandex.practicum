import { memo } from 'react';
import ReactPlayer from 'react-player';
import s from './ScreenCast.module.css';

const ScreenCast = () => (
  <section className={s.screenCast}>
    <ReactPlayer
      url='https://www.dropbox.com/scl/fi/5542itv3w5od6gc5rdkhi/Button.mp4?rlkey=a7gs5r16uz4wt9scq08317j45&dl=0'
      controls
    />
    <button className={s.button} >Кнопка</button>
  </section>
);

export default memo(ScreenCast);
