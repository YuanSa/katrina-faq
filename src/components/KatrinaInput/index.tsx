import { CSSProperties, FC } from "react";
import { Button, Input, Tooltip, withField } from "@douyinfe/semi-ui";
import { BsPlusCircleDotted } from "react-icons/bs";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { KatrinaItem } from "../../types/Contents";
import { VscChromeClose, VscClose } from "react-icons/vsc";

interface KatrinaInputProps {
  value?: KatrinaItem;
  onChange?: (newValue: KatrinaItem) => unknown;
  active?: boolean;
  onActive?: () => unknown;
  onDelete?: () => unknown;
  className?: string;
  style?: CSSProperties;
}
export const KatrinaInput: FC<KatrinaInputProps> = ({
  value: { id = "", tags = [], name = "" } = {},
  onChange,
  active = false,
  onActive,
  onDelete,
  className,
  style,
}) => {
  return (
    <div
      onClick={onActive}
      className={classNames(styles.input, active && styles.active, className)}
      style={style}
    >
      <div className={styles.tags}>
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <Tooltip content={tag} key={index} position="topLeft">
              <span className={styles.tag}>{tag}</span>
            </Tooltip>
          ))
        ) : (
          <Tooltip content="添加标签" position="topLeft">
            <span className={styles.tag}>
              <BsPlusCircleDotted />
            </span>
          </Tooltip>
        )}
      </div>
      <Input
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
      {onDelete && (
        <Button
          size="small"
          className={styles.delete}
          icon={<VscChromeClose />}
          theme="borderless"
          type="tertiary"
          onClick={onDelete}
        />
      )}
    </div>
  );
};

export const KatrinaInputField = withField(KatrinaInput);
