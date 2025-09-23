import styles from './NeonContainer.module.css';
import classNames from 'classnames';

type NeonContainerProps = {
  children: React.ReactNode;
  className?: string;
}

export function NeonContainer({
  children,
  className
}: NeonContainerProps) {
  return (
    <div className={classNames(styles.neonContainerWrapper, className)}>
      {children}
    </div>
  )
}