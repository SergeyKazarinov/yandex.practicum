import { memo, ReactNode } from 'react';
import styles from './TaskBlock.module.css';

interface TaskBlockProps {
  title: string;
  description: ReactNode;
  requirements: string[];
  className?: string;
}

const TaskBlock = ({
  title,
  description,
  requirements,
  className = '',
}: TaskBlockProps) => (
  <div className={`${styles.taskBlock} ${className}`}>
    <h3 className={styles.taskBlock__title}>{title}</h3>
    <div className={styles.taskBlock__description}>{description}</div>
    {requirements.length > 0 && (
      <ul className={styles.taskBlock__requirements}>
        {requirements.map((requirement, index) => (
          <li
            key={index}
            className={styles.taskBlock__requirement}
            dangerouslySetInnerHTML={{ __html: requirement }}
          />
        ))}
      </ul>
    )}
  </div>
);

export default memo(TaskBlock);
