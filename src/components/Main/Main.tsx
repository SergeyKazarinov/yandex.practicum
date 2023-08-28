import { FC, memo } from 'react';
import s from './Main.module.css';
import image from '../../images/person.png';

const Main: FC = () => (
    <section className={s.main}>
      <div className={s.info}>
        <h1 className={s.title}>Привет</h1>
        <p className={s.subtitle}>Я Сергей Казаринов</p>
        <p className={s.description}>И я Frontend-разработчик</p>
      </div>
      <div className={s.imageWrapper}>
        <img className={s.image} src={image} alt="Аватар" />
        <div className={s.square} />
      </div>
    </section>
);

export default memo(Main);
