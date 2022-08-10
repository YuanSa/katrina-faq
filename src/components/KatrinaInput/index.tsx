import { CSSProperties, FC } from "react";
import { Input, withField } from "@douyinfe/semi-ui";
import { VscKey } from "react-icons/vsc";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { KatrinaItem } from "../../types/Contents";

interface KatrinaInputProps {
  value?: KatrinaItem;
  onChange?: (newValue: KatrinaItem) => unknown;
  active?: boolean;
  onActive?: () => unknown;
  className?: string;
  style?: CSSProperties;
}
export const KatrinaInput: FC<KatrinaInputProps> = ({
  value: { id = "", tags = [], name = "" } = {},
  onChange,
  active = false,
  onActive,
  className,
  style,
}) => {
  return (
    <div
      onClick={onActive}
      className={classNames(styles.input, active && styles.active, className)}
      style={style}
    >
      <Input
        prefix={<VscKey className={styles["id-input-prefix"]} />}
        className={styles["id-input"]}
        value={id}
        onChange={(newId) => onChange?.({ id: newId, tags, name })}
        placeholder="请输入 Key"
      />
      <Input
        className={styles["text-input"]}
        value={name}
        onChange={(newName) => onChange?.({ id, tags, name: newName })}
        placeholder="请输入标题"
      />
      {tags.length > 0 && <div className={styles.tags}>{tags}</div>}
    </div>
  );
};

export const KatrinaInputField = withField(KatrinaInput);
