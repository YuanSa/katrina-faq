import classNames from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

export interface FooterProps {
  baseContentsVersion?: string;
  currentEditorVersion?: string;
  hasUnsavedChanges?: boolean;
}
export const Footer: FC<FooterProps> = ({
  baseContentsVersion,
  currentEditorVersion,
  hasUnsavedChanges = false,
}) => {
  return (
    <footer
      className={classNames(styles.footer, !hasUnsavedChanges && styles.saved)}
    >
      <div className={styles.status}>
        {hasUnsavedChanges ? "本地变更尚未同步" : "本地内容已同步"}
      </div>
      {currentEditorVersion && (
        <div className={styles.version}>编辑器版本 {currentEditorVersion}</div>
      )}
      {baseContentsVersion && (
        <div className={styles.version}>内容基准版本 {baseContentsVersion}</div>
      )}
    </footer>
  );
};
