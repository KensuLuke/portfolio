import React from "react";
import styles from "../styles/HomePage.module.css";
import luke from "../resources/Luke.jpg";

import { NavLink, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js/mdi";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img src={luke} alt="Luke Kensu" className={styles.pic} />
        <h3 className={styles.name}>Luke Kensu</h3>
        <NavLink className={styles["nav-link"]}>
          <Icon size={1} path={mdiHome} className={styles.svg} />
          <span className={styles.home}>Home</span>
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
