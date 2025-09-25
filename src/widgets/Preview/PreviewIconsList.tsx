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
        name='typescript' 
        className={styles.previewTechnologyIcon} 
      />
      <Icon 
        name='node' 
        className={styles.previewTechnologyIcon} 
      />
    </div>
  )
}