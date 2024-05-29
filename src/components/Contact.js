import React from "react";
import styles from "../styles/Contact.module.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiLinkedin, mdiPhone } from "@mdi/js/mdi";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h3 className={styles.sub}>Personal Info</h3>
      <ul className={styles.list}>
        <li>
          <Icon size={1} path={mdiPhone} className={styles.svg} /> 09032583637
        </li>
        <li>
          <Icon size={1} path={mdiEmail} className={styles.svg} />
          Lukekensu14@gmail.com
        </li>
        <li>
          <Icon size={1} path={mdiLinkedin} className={styles.svg} />
          <Link to={"https://www.linkedin.com/in/kensu-luke"}>
            www.linkedin.com/in/kensu-luke
          </Link>
        </li>
        <li>
          <Icon size={1} path={mdiGithub} className={styles.svg} />
          <Link to={"https://www.github.com/kensuluke"}>
            www.github/kensuluke
          </Link>
        </li>
      </ul>
    </div>
  );
}
