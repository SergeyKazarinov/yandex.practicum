import { memo, ReactNode } from 'react';
import { BlockType } from '../../constants/classPageConstants';
import styles from './InfoBlock.module.css';

interface InfoBlockProps {
  type: BlockType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const InfoBlock = ({
  type,
  title,
  children,
  className = '',
}: InfoBlockProps) => {
  const blockClass = `${styles.infoBlock} ${
    styles[`infoBlock_${type}`]
  } ${className}`;

  return (
    <div className={blockClass}>
      {title && <h3 className={styles.infoBlock__title}>{title}</h3>}
      <div className={styles.infoBlock__content}>{children}</div>
    </div>
  );
};

export default memo(InfoBlock);
