import { FC } from "react";
import styles from "./styles.module.scss";
import {
  Button,
  Collapse,
  Dropdown,
  TextArea,
  withField,
} from "@douyinfe/semi-ui";
import { KatrinaItem } from "../../types/Contents";
import { KatrinaInput } from "../KatrinaInput";
import { VscMenu, VscTag, VscTrash } from "react-icons/vsc";

interface KatrinaItemInputPanelProps {
  itemKey: string;
  value?: KatrinaItem;
  onChange?: (newValue: KatrinaItem) => unknown;
  onDelete?: () => unknown;
}
export const KatrinaItemInputPanel: FC<KatrinaItemInputPanelProps> = ({
  value = {},
  itemKey,
  onChange,
  onDelete,
}) => {
  const handlePartialChange = (newValue: Partial<KatrinaItem>) =>
    onChange?.(Object.assign({}, value, newValue));

  return (
    <Collapse.Panel
      header={
        <KatrinaInput
          className={styles.input}
          value={value}
          onChange={(newValue) => handlePartialChange(newValue)}
          onDelete={onDelete}
        />
      }
      className={styles.panel}
      itemKey={itemKey}
    >
      <TextArea
        className={styles.contents}
        rows={1}
        autosize
        value={value.contents}
        onChange={(newContents) =>
          handlePartialChange({ contents: newContents })
        }
        placeholder="请输入正文"
      />
    </Collapse.Panel>
  );
};
export const KatrinaItemInputPanelField = withField(KatrinaItemInputPanel);
