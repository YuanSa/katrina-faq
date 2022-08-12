import { FC } from "react";
import { Dropdown, Tag } from "@douyinfe/semi-ui";
import { GiCaesar } from "react-icons/gi";
import {
  VscNewFile,
  VscFolderOpened,
  VscCloudUpload,
  VscCloudDownload,
  VscInfo,
  VscRedo,
  VscDiscard,
  VscTools,
  VscWand,
  VscTerminalCmd,
  VscQuestion,
  VscFeedback,
  VscOrganization,
  VscSettingsGear,
  VscGlobe,
} from "react-icons/vsc";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <GiCaesar className={styles.logo} />
      <menu className={styles.menu}>
        <Dropdown
          position="topLeft"
          trigger="click"
          render={
            <Dropdown.Menu>
              <Dropdown.Item icon={<VscNewFile />}>新建文件</Dropdown.Item>
              <Dropdown.Item icon={<VscFolderOpened />}>打开文件</Dropdown.Item>
              <Dropdown.Item icon={<VscGlobe />}>
                从互联网打开文件
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={<VscCloudUpload />}>发布</Dropdown.Item>
              <Dropdown.Item icon={<VscCloudDownload />}>
                保存到本地
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={<VscInfo />}>文件详情</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <li className={styles["menu-item"]}>文件</li>
        </Dropdown>
        <Dropdown
          position="topLeft"
          trigger="click"
          render={
            <Dropdown.Menu>
              <Dropdown.Item icon={<VscRedo />}>撤销</Dropdown.Item>
              <Dropdown.Item icon={<VscDiscard />}>还原</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <li className={styles["menu-item"]}>编辑</li>
        </Dropdown>
        <Dropdown
          position="topLeft"
          trigger="click"
          render={
            <Dropdown.Menu>
              <Dropdown.Item icon={<VscSettingsGear />}>内容配置</Dropdown.Item>
              <Dropdown.Item icon={<VscWand />}>展示配置</Dropdown.Item>
              <Dropdown.Item icon={<VscTools />}>
                编辑器配置（只读）
              </Dropdown.Item>
              <Dropdown.Item icon={<VscTerminalCmd />}>
                自定义配置
              </Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <li className={styles["menu-item"]}>配置</li>
        </Dropdown>
        <Dropdown
          position="topLeft"
          trigger="click"
          render={
            <Dropdown.Menu>
              <Dropdown.Item icon={<VscQuestion />}>使用说明</Dropdown.Item>
              <Dropdown.Item icon={<VscFeedback />}>意见反馈</Dropdown.Item>
              <Dropdown.Item icon={<VscOrganization />}>关于</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <li className={styles["menu-item"]}>帮助</li>
        </Dropdown>
      </menu>
      <div className={styles.extra}>
        <Tag color="white" type="solid">
          2 Notices
        </Tag>
      </div>
    </header>
  );
};
