import { memo } from "react";
import styles from './Preview.module.css';
import { Button } from "@/shared";
import Image from "next/image";
import karen from '../../shared/assets/karen2.png';

export const Preview = memo(function Preview() {
  return (
    <section className={styles.previewWrapper}>
      <div className={styles.previewContent}>
        <div className={styles.previewLeftColumn}>
          <h1 className={styles.previewTitle}>Акопьян Карэн <br /> Fullstack-разработчик</h1>
          <p className={styles.previewSubtitle}>
            Более 5 лет занимаюсь Web-разработкой,  за данный период времени мне удалось поработать в таких 
            компаниях как Osla, Клик.Страхование и Сбербанк
          </p>
          <Button className={styles.previewButton}>Скачать резюме</Button>
        </div>
        <div className={styles.previewRightColumn}>

        </div>
      </div>
    </section>
  )
})