import styles from './Preview.module.css';
import { Icon } from "@/shared";

export function PreviewIconsList() {
  return (
    <div className={styles.previewTechnologiesList}>
      <Icon 
        name='react' 
        className={styles.previewTechnologyIcon} 
      />
      <Icon 
        name='next' 
        width={120} 
        height={120} 
        className={styles.previewTechnologyIcon} 
      />
      <Icon 
        name='typescript' 
        className={styles.previewTechnologyIcon} 
      />
      <Icon 
        name='node' 
        className={styles.previewTechnologyIcon} 
      />
      <Icon 
        name='express' 
        width={140} 
        height={140} 
        className={styles.previewTechnologyIcon} 
      />
    </div>
  )
}