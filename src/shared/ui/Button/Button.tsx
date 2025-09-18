import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  children,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}