import { FC } from "react";
import { IoLanguage } from "react-icons/io5";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { withField } from "@douyinfe/semi-ui";

interface TabsProps {
  list?: string[];
  active?: string;
  onActive?: (newKey: string) => unknown;
}
export const Tabs: FC<TabsProps> = ({ list = [], active, onActive }) => (
  <ul className={styles.list}>
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

export const TabsField = withField(Tabs, { valueKey: "list" });
