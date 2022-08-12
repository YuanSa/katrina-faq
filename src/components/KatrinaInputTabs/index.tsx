import { FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ArrayField, Button, withField } from "@douyinfe/semi-ui";
import { KatrinaInputField } from "../KatrinaInput";

interface KatrinaInputTabsProps {
  field: string;
  active?: number;
  onActive?: (newKey: number) => unknown;
}
export const KatrinaInputTabs: FC<KatrinaInputTabsProps> = ({
  field,
  active,
  onActive,
}) => {
  return (
    <ArrayField field={field}>
      {({ add, arrayFields }) => (
        <div className={styles.list}>
          {arrayFields.map(({ key, field: itemField, remove }, index) => (
            <KatrinaInputField
              className={classNames(
                styles.input,
                index === active && styles.active
              )}
              noLabel
              key={key}
              field={itemField}
              active={index === active}
              onActive={() => onActive?.(index)}
              onDelete={remove}
            />
          ))}
          <Button onClick={() => add()}>Add</Button>
        </div>
      )}
    </ArrayField>
  );
};
export const KatrinaInputTabsField = withField(KatrinaInputTabs);
