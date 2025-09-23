import { memo } from "react";
import styles from './AboutMe.module.css';
import { Blur, NeonContainer, Subtitle, Title } from "@/shared";
import { AboutMeListItems } from "./AboutMeListItems";
 
export const AboutMe = memo(function AboutMe() {
  return (
    <section className={styles.aboutMeWrapper}>
      <div className={styles.aboutMeTitleContent}>
        <Title className={styles.aboutMeTitle}>Обо мне</Title>
        <NeonContainer className={styles.aboutMeSubtitleWrapper}>
          <Subtitle className={styles.aboutMeSubtitle}>
            Последние 5 лет я занимаюсь программированием и Web-разработкой.  <br /> <br />
            Начинал свой путь junior разработчиком в компании OSLA, в которой разрабатывал приложение для управление процессом строительства. <br />
            На данный момент работаю в Сбербанке на Senior позиции в продукте СберЧат - это корпоративный
            мессенджер, которым пользуются свыше 200 тысяч человек по всей России.
            Помимо работы занимаюсь спортом, активно хожу в зал и на бокс. Из увлечений это бильярд и хоккей. 
            В свое свободное время люблю изучать новые технологии и развиваться, и создавать свои проекты.
          </Subtitle>
        </NeonContainer>
      </div>
      <AboutMeListItems />
    </section>
  )
})