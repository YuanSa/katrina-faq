import { FC } from "react";
import { IoLanguage } from "react-icons/io5";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface KatrinaLocaleTabsProps {
  list?: string[];
  active?: string;
  onActive?: (newKey: string) => unknown;
  className?: string;
}
export const KatrinaLocaleTabs: FC<KatrinaLocaleTabsProps> = ({
  list = [],
  active,
  onActive,
  className,
}) => (
  <ul className={classNames(styles.list, className)}>
    {list.map((item) => (
      <li
        key={item}
        className={classNames(styles.item, active === item && styles.active)}
        onClick={() => onActive?.(item)}
      >
        <IoLanguage className={styles.icon} />
        <span className={styles.text}>{item}</span>
      </li>
    ))}
  </ul>
);
