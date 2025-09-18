import { memo } from "react";
import styles from './Header.module.css';
import { Button } from "@/shared/ui";

export const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationList__item}>Главная</li>
        <li className={styles.navigationList__item}>Обо мне</li>
        <li className={styles.navigationList__item}>Мои проекты</li>
        <li className={styles.navigationList__item}>Менторство</li>
        <li className={styles.navigationList__item}>Контакты</li>
      </ul>

      <Button>Связаться со мной</Button>
    </header>
  )
})