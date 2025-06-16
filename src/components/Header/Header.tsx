import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type TRoutes = {
  name: string;
  to: string;
};

const ROUTE_CONFIG: TRoutes[] = [
  {
    name: 'Главная',
    to: '/',
  },
  {
    name: 'Скринкаст',
    to: '/screen',
  },
  {
    name: 'Задачка',
    to: '/js',
  },
  {
    name: 'Классы',
    to: '/class',
  },
];

const Header = () => (
  <header className={s.header}>
    <nav className={s.nav}>
      {ROUTE_CONFIG.map((route) => (
        <NavLink className={({ isActive }) => `link ${isActive && 'link_active'}`} to={route.to}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default memo(Header);
