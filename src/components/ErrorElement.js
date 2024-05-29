import React from "react";
import styles from "../styles/ErrorElement.module.css";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className={styles.container}>
      Something went wrong...
      <NavLink className={styles.link}>Go back</NavLink>
    </div>
  );
}
