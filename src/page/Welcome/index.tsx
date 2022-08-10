import { FC, useCallback } from "react";
import { GiCaesar } from "react-icons/gi";
import {
  VscNewFile,
  VscFolderOpened,
  VscCloudDownload,
} from "react-icons/vsc";
import { useT } from "yuansa-i18n";
import styles from "./styles.module.scss";
import imgOceanCity from "../../assets/images/ocean-city.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Welcome: FC = () => {
  const navigate = useNavigate();
  const handleGoCreate = useCallback(() => navigate('/edit'), []);
  return (
    <main className={styles.page}>
      <div className={styles.cover}>
        <GiCaesar className={styles.logo} />
        <h1 className={styles.title}>YuanSa FAQ</h1>
        <p className={styles.description}>A tool to manage your FAQ easily.</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.action} type="button" onClick={handleGoCreate}>
          <VscNewFile className={styles.icon} />
          <span className={styles.text}>Create a new file</span>
        </button>
        <button className={styles.action} type="button">
          <VscFolderOpened className={styles.icon} />
          <span className={styles.text}>Open a local file</span>
        </button>
        <button className={styles.action} type="button">
          <VscCloudDownload className={styles.icon} />
          <span className={styles.text}>Open an internet file</span>
        </button>
      </div>
      <div className={styles.links}>
        <Link to="/about" className={styles.link} type="button">
          <span className={styles.text}>How to use?</span>
        </Link>
        <span>{' '}</span>
        <Link to="/about" className={styles.link} type="button">
          <span className={styles.text}>About Katrina FAQ</span>
        </Link>
      </div>
      <img
        className={styles.background}
        src={imgOceanCity}
        alt="picture of an ocean city"
      />
    </main>
  );
};
