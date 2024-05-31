import React from "react";
import styles from "../styles/HomePage.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const goto = (e) => {
    navigate(`${e}`);
  };
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <h1 className={styles.lead}>Luke Kensu</h1>
        <p className={styles["main-text"]}>
          Hi, I’m a passionate full-stack developer with a strong background in
          building and deploying scalable web applications. Over the past few
          years, I have honed my skills in both front-end and back-end
          development, and my work has been utilized and tested by different
          organizations.
        </p>
        <NavLink className={styles["projects-btn"]} to="projects">
          Projects
        </NavLink>
      </div>
      <div className={styles.side}>
        <div className={styles["card-body"]}>
          <h3 className={styles["card-head"]}>Quick Links</h3>
          <ul className={styles.list}>
            <li>
              <button
                className={styles["link"]}
                onClick={() => {
                  goto("info");
                }}
              >
                Info
              </button>
            </li>
            <li>
              <button
                className={styles["link"]}
                onClick={() => {
                  goto("projects");
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={styles["link"]}
                onClick={() => {
                  goto("contact");
                }}
              >
                Contact
              </button>
            </li>
            {/* <li>
              <button
                className={styles["link"]}
                onClick={() => {
                  goto("cv");
                }}
              >
                CV
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      <ul className={styles["hidden-links"]}>
        <li>
          <button
            className={styles["hidden-link"]}
            onClick={() => {
              goto("info");
            }}
          >
            Info
          </button>
        </li>
        <li>
          <button
            className={styles["hidden-link"]}
            onClick={() => {
              goto("projects");
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={styles["hidden-link"]}
            onClick={() => {
              goto("contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}
