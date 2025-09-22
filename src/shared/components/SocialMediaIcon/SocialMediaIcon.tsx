import styles from './SocialMediaIcon.module.css';

type SocialMediaIconProps = {
  children: React.ReactNode;
}

export function SocialMediaIcon({
  children
}: SocialMediaIconProps) {
  return (
    <div className={styles.socialMediaIconWrapper}>
      {children}
    </div>  
  )
}