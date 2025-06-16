import { memo } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: string;
  level?: 1 | 2 | 3;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  bordered?: boolean;
  className?: string;
}

const SectionTitle = ({
  children,
  level = 2,
  color = 'primary',
  bordered = false,
  className = '',
}: SectionTitleProps) => {
  const titleClass = `${styles.sectionTitle} ${
    styles[`sectionTitle_${color}`]
  } ${bordered ? styles.sectionTitle__bordered : ''} ${className}`;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={titleClass}>{children}</Tag>;
};

export default memo(SectionTitle);
