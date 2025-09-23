import { NeonContainer, UnorderedList } from '@/shared';
import styles from './AboutMeListItems.module.css';

const ABOUT_ME_LIST = [
  {id: '1', title: 'Имею реальный опыт работы Web-разработчиком 5 лет'},
  {id: '2', title: 'Работаю в Сбербанке на Senior позиции почти 2 года'},
  {id: '3', title: 'Нашел первую работу разработчиком, учась 1 курсе в университете'},
  {id: '4', title: 'Обучаюсь в магистратуре СПбГУТ на направлении "Программная инженерия"'},
]

export function AboutMeListItems() {
  return (
    <div className={styles.aboutMeWrapper}>
      <NeonContainer>
        <UnorderedList title='Ключевые факты обо мне:' list={ABOUT_ME_LIST} />
      </NeonContainer>
      <NeonContainer>
        <UnorderedList title='Ключевые навыки:' list={ABOUT_ME_LIST} />
      </NeonContainer>
    </div>
  )
}