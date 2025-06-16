import { memo } from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  isToggled: boolean;
  onToggle: () => void;
  showText: string;
  hideText: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

const ToggleButton = ({
  isToggled,
  onToggle,
  showText,
  hideText,
  variant = 'primary',
  className = '',
}: ToggleButtonProps) => {
  const buttonClass = `${styles.toggleButton} ${
    styles[`toggleButton_${variant}`]
  } ${isToggled ? styles[`toggleButton_${variant}-active`] : ''} ${className}`;

  return (
    <button onClick={onToggle} className={buttonClass} type="button">
      {isToggled ? hideText : showText}
    </button>
  );
};

export default memo(ToggleButton);
