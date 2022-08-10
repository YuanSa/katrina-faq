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
}
export const KatrinaItemInputPanel: FC<KatrinaItemInputPanelProps> = ({
  value = {},
  itemKey,
  onChange,
}) => {
  const handlePartialChange = (newValue: Partial<KatrinaItem>) =>
    onChange?.(Object.assign({}, value, newValue));

  return (
    <Collapse.Panel
      header={
        <div className={styles.header}>
          <KatrinaInput
            className={styles.input}
            value={value}
            onChange={(newValue) => handlePartialChange(newValue)}
          />
          <Dropdown
            position="bottomRight"
            trigger="click"
            render={
              <Dropdown.Menu>
                <Dropdown.Item icon={<VscTag />}>编辑标签</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={<VscTrash />} type="danger">
                  删除
                </Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Button icon={<VscMenu />} theme="borderless" type="tertiary" />
          </Dropdown>
        </div>
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
