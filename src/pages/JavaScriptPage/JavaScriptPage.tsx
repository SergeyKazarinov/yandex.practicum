import { memo } from 'react';
import { motion } from 'framer-motion';
import s from './JavaScriptPage.module.css';
import { pageVariants } from '../../shared/config/pageVariants';

const JavaScriptPage = () => (
    <motion.section className={s.javaScriptPage}
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2 className={s.title}>Задачка на JavaScript</h2>
      <p className={s.info}>
        При устройстве на работу, на собеседовании одним из этапов технического интервью
        может стать практическая часть,
        на которой вас попросят написать код для решения какой-то задачи.
        Поэтому тренировка решения задач на JS
        повышает шансы пройти этап технического интервью успешно.
      </p>
      <p className={s.info}>
        Для этого я приготовил для вас одну простенькую задачу,
        которая поможет проверить ваши навыки работы на JS и
        проверить, насколько хорошо вы его знаете.
      </p>
      <h3 className={s.title}>Условия</h3>
      <p className={s.info}>
        Необходимо создать функцию, которая проверяет
        является ли строка палиндромом. При этом не учитываются пробелы и регистр строки.
      </p>
      <p className={s.info}>
        <span className={s.bold}>Палиндром</span> - это текст,
        который читается одинаково и слева, и справа.
      </p>
      <ul>
        <li>121 — это палиндром.</li>
        <li>А роза упала на лапу Азора — тоже палиндром.</li>
        <li>12321 — и это палиндром.</li>
        <li>Я бы изменил мир, но бог не дает исходники – это строка не палиндром</li>
      </ul>
    </motion.section>
);

export default memo(JavaScriptPage);
