import { FC } from "react";
import { IoLanguage } from "react-icons/io5";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { withField } from "@douyinfe/semi-ui";
import { KatrinaItem } from "../../types/Contents";
import { KatrinaInput } from "../KatrinaInput";

interface KatrinaInputTabsProps {
  value?: KatrinaItem[];
  onChange?: (newValue: KatrinaItem[]) => unknown;
  active?: number;
  onActive?: (newKey: number) => unknown;
}
export const KatrinaInputTabs: FC<KatrinaInputTabsProps> = ({
  value = [],
  onChange,
  active,
  onActive,
}) => {
  const onChangeIndex = (newValue: KatrinaItem, targetIndex: number) => {
    onChange?.(
      value.map((item, index) => (index === targetIndex ? newValue : item))
    );
  };
  return (
    <div className={styles.list}>
      {value.map((item, index) => (
        <KatrinaInput
          className={classNames(
            styles.input,
            index === active && styles.active
          )}
          value={item}
          onChange={(newValue) => onChangeIndex(newValue, index)}
          active={index === active}
          onActive={() => onActive?.(index)}
        />
      ))}
    </div>
  );
};
export const KatrinaInputTabsField = withField(KatrinaInputTabs);
