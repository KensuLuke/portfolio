import React from "react";
import styles from "../styles/About.module.css";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.main}>
      <h2 className={styles.lead}>About</h2>
      <p className={styles.text}>
        I am a passionate full stack developer with over 3 years of experience
        in building dynamic and responsive web applications. My expertise lies
        in both front-end and back-end development, and I have a keen interest
        in creating user-centric solutions. Having developed a complex
        application that has been actively tested by an organization, I am eager
        to bring my skills and creativity to a collaborative team environment.
      </p>
      <h2 className={styles.lead}>Skills and Technologies</h2>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h3 className={styles.sub}>Front-End</h3>
          <ul className={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bluestack</li>
            <li>React</li>
          </ul>
          <h3 className={styles.sub}>Back-End</h3>
          <ul className={styles.list}>
            <li>Node Js</li>
            <li>Express</li>
          </ul>
          <h3 className={styles.sub}>Databases</h3>
          <ul className={styles.list}>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
          <h3 className={styles.sub}>Others</h3>
          <ul className={styles.list}>
            <li>Git</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles["card-body"]}>
            <h3 className={styles["card-head"]}>I've got soft skills too</h3>
            <ul>
              <li>Problem-solving</li>
              <li>Communication</li>
              <li>Project management</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.lead}>Education</h2>
      <h3 className={styles.sub}>
        National Diploma in Electrical and Electronics Engineering
      </h3>
      <p className={styles.text}>
        Ogun State Institute of Technology, Igbesa, 2019
      </p>

      <h3 className={styles.sub}>Certifications</h3>
      <ul className={styles.list}>
        <li>Cisco IT Essentials, Cisco Netacad, Igbesa</li>
        <li>The Web Developer Bootcamp 2022, Udemy</li>
        <li>The Web Developer Bootcamp 2022, Udemy</li>
        <li>
          React - The Complete Guide 2023 (incl. React Router & Redux), Udemy
        </li>
      </ul>

      <h3 className={styles.sub}>References</h3>
      <p className={styles.text}>Available on request.</p>

      <h2 className={styles.lead}>Conclusion</h2>
      <p className={styles.text}>
        I am excited to bring my skills and experience to a forward-thinking
        team. Please feel free to <NavLink to={"../contact"}>contact</NavLink>{" "}
        me to discuss potential opportunities.
      </p>
    </div>
  );
}
