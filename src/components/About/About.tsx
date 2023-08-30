import { FC, memo } from 'react';
import s from './About.module.css';
import student from '../../images/student.jpg';
import now from '../../images/now.jpg';

const About: FC = () => (
    <section className={s.about}>
      <div className={s.container}>
        <h2 className={s.title}>Обо мне</h2>
        <p className={s.description}>
          И снова привет! Расскажу немного о себе и начну с фотографии старшей школы.
          Она, кстати, слева. Это одна из немногих фотографий, которую я нашел из своего архива.
          Она сделана на 1 курсе университета.
          А снизу, справа - это я сейчас.
          Как по мне, выглядит описание интересно. Это лучше, чем простой текс на листочке.

        </p>
        <p className={s.description}>
          Это одна из причин, почему я стал заниматься web-разработкой.
          Более того, само программирование в целом - это не только творчество, это также
          умение мыслить нестандартно и находить простое в сложном.
          А когда фантазия начинает разыгрываться и идеи так и появляются в голове,
          любой каприз можно реализовать с помощью кода.
          И ограничения состоят только в твоих умениях,
          А умения можно развивать, и это еще один плюс в программировании - мне всегда
          приходится становиться лучшей версией самого себя.
          Как говориться: "совершенству нет предела!".
        </p>
        <p className={s.description}>
          Кстати, чуть не забыл. Ссылка на сайт есть внизу страницы.
          Кромет того, на моей страничке GitHub есть много других проектов,
          с которыми ты можешь познакомиться.
        </p>
        <div className={s.flex}>
          <div className={`${s.imageWrapper} ${s.top}`}>
            <img className={s.image} src={student} alt='фотография студента' />
          </div>
          <div className={`${s.imageWrapper} ${s.bottom}`}>
            <img className={s.image} src={now} alt='фотография студента' />
          </div>
        </div>
      </div>
      <div className={s.squareDown} />
      <div className={s.squareTop} />
    </section>
);

export default memo(About);
