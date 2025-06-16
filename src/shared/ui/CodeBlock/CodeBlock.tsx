import { memo } from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({
  code,
  language = 'javascript',
  className = '',
}: CodeBlockProps) => (
  <div className={`${styles.codeBlock} ${className}`}>
    <pre className={styles.codeBlock__pre}>
      <code
        className={`${styles.codeBlock__code} ${
          styles[`codeBlock__code_${language}`]
        }`}
      >
        {code}
      </code>
    </pre>
  </div>
);

export default memo(CodeBlock);
