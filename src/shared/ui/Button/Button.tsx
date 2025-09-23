import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'transparent';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function Button({
  children,
  className,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button 
      className={classNames(styles.button, className, {
        [styles.secondary]: variant === 'secondary',
        [styles.transparent]: variant === 'transparent',
      })}
    >
      {children}
    </button>
  )
}