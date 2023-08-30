import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => `link ${isActive && 'link_active'}`}
          to='/'
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive && 'link_active'}`}
          to='/screen'
        >
          Скринкаст
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive && 'link_active'}`}
          to='/js'
        >
          Задачка
        </NavLink>
      </nav>
    </header>
);

export default memo(Header);
