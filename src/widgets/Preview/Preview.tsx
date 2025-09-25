import { memo } from "react";
import styles from './Preview.module.css';
import { Button, Icon, SocialMediaIcon, Subtitle } from "@/shared";
import Image from "next/image";
import karen from '@/shared/assets/karen3.png';
import { PreviewIconsList } from "./PreviewIconsList";

function PreviewMainContent() {
  return (
    <div className={styles.previewLeftColumn}>
      <h1 className={styles.previewTitle}>Акопьян Карэн <br /> Fullstack-разработчик</h1>
      <Subtitle>
        Более 5 лет занимаюсь Web-разработкой,  за данный период времени мне удалось поработать в таких 
        компаниях как Osla, Клик.Страхование и Сбербанк
      </Subtitle>
      <div className={styles.previewSocialMediaIcons}>
          <a className={styles.previewSocialMediaLink} href="https://github.com/comp-master-byte?tab=repositories" target="_blank">
            <SocialMediaIcon>
              <Icon name="github" />
            </SocialMediaIcon>
          </a>
        </div>
      
      <div className={styles.previewButtons}>
        <Button className={styles.previewButton}>
          Связаться со мной
        </Button>
        <Button className={styles.previewButton} variant="purple">
          Скачать резюме
        </Button>
      </div>
      <PreviewIconsList />
    </div>
  )
}

export const Preview = memo(function Preview() {
  return (
    <section className={styles.previewWrapper}>
      <div className={styles.previewContent}>
        <PreviewMainContent />
        <div className={styles.previewRightColumn}>
          <Image src={karen} alt="" />
        </div>
      </div>
    </section>
  )
})