import { FC, memo } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsTelegram } from 'react-icons/bs';
import s from './Footer.module.css';

const Footer: FC = () => (
    <footer className={s.footer}>
      <a href='https://github.com/SergeyKazarinov' target='_blank'>Ссылка на сайт</a>
      <div className={s.icons}>
        <a href='https://github.com/SergeyKazarinov' target='_blank'>
          <AiFillGithub size={30}/>
        </a>
        <a href='mailto:kazarinov092@gmail.com' target='_blank'>
          <SiGmail size={30}/>
        </a>
        <a href='https://t.me/SKey92' target='_blank'>
          <BsTelegram size={30}/>
        </a>
      </div>
    </footer>
);

export default memo(Footer);
