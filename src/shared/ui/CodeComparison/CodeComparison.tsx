import { memo } from 'react';
import CodeBlock from '../CodeBlock/CodeBlock';
import styles from './CodeComparison.module.css';

interface CodeComparisonProps {
  leftTitle: string;
  leftCode: string;
  rightTitle: string;
  rightCode: string;
  leftType?: 'error' | 'warning' | 'info';
  rightType?: 'success' | 'info' | 'primary';
  className?: string;
}

const CodeComparison = ({
  leftTitle,
  leftCode,
  rightTitle,
  rightCode,
  leftType = 'warning',
  rightType = 'success',
  className = '',
}: CodeComparisonProps) => (
  <div className={`${styles.codeComparison} ${className}`}>
    <div className={styles.codeComparison__column}>
      <div
        className={`${styles.codeComparison__header} ${
          styles[`codeComparison__header_${leftType}`]
        }`}
      >
        <h4 className={styles.codeComparison__title}>{leftTitle}</h4>
      </div>
      <CodeBlock
        code={leftCode}
        className={styles[`codeComparison__block_${leftType}`]}
      />
    </div>

    <div className={styles.codeComparison__column}>
      <div
        className={`${styles.codeComparison__header} ${
          styles[`codeComparison__header_${rightType}`]
        }`}
      >
        <h4 className={styles.codeComparison__title}>{rightTitle}</h4>
      </div>
      <CodeBlock
        code={rightCode}
        className={styles[`codeComparison__block--${rightType}`]}
      />
    </div>
  </div>
);

export default memo(CodeComparison);
