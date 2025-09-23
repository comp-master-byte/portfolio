import { memo } from "react";
import styles from './UnorderedList.module.css';
import classNames from "classnames";

type UnorderedListItem = {
  id: string;
  title: string;
}

type UnorderedListItemProps = {
  title: string;
}

function UnorderedListItemComponent({
  title
}: UnorderedListItemProps) {
  return (
    <li className={styles.unorderedListItemWrapper}>
      <div className={styles.unorderedListItemPointer}></div>
      <p className={styles.unorderedListItemTitle}>{title}</p>
    </li>
  )
}

type UnorderedListProps = {
  list: UnorderedListItem[];
  title?: string;
  classNameList?: string;
}

export const UnorderedList = memo(function UnorderedList({
  list,
  title,
  classNameList,
}: UnorderedListProps) {
  return (
    <>
      {title && <p className={styles.unorderedListTitle}>{title}</p>}
      <ul className={classNames(styles.unorderedListWrapper, classNameList)}>
        {list.map((item) => <UnorderedListItemComponent key={item.id} title={item.title} />)}
      </ul>
    </>
  )
})