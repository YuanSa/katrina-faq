import { FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { KatrinaInput } from "../KatrinaInput";
import { UUID } from "../../types/Basic";
import { ContentsEditorValue } from "../../types/Editor";
import { withField } from "@douyinfe/semi-ui";

type GroupValue = ContentsEditorValue["groups"][string][number];

interface KatrinaGroupInputProps {
  value: GroupValue;
  onChange?: (newValue: GroupValue) => unknown;
  onDelete?: () => unknown;
  active?: UUID;
  onActive?: (newUUID: UUID) => unknown;
}
export const KatrinaGroupInput: FC<KatrinaGroupInputProps> = ({
  value,
  onChange,
  onDelete,
  active,
  onActive,
}) => {
  return (
    <KatrinaInput
      className={classNames(
        styles.input,
        active === value.uuid && styles.active
      )}
      value={value}
      onChange={(newValue) => onChange?.({ ...value, ...newValue })}
      active={active === value.uuid}
      onActive={() => onActive?.(value.uuid)}
      onDelete={onDelete}
    />
  );
};

export const KatrinaGroupInputField = withField(KatrinaGroupInput);
