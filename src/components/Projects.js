import React from "react";
import styles from "../styles/Projects.module.css";

import dashboard from "../resources/Propa/Propa Class UI.png";
import exam from "../resources/Propa/Exam Interface.jpeg";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.lead}>Propa School Management Software</h2>
      <img className={styles.img} alt="project" src={dashboard} />
      <h3 className={styles.sub}>App Overview</h3>
      <p className={styles.text}>
        The app, named Propa, is a comprehensive school management system
        designed to streamline various administrative and academic processes
        within educational institutions. The app is in its beta phase, with
        ongoing development to enhance its features and usability.
      </p>
      <h3 className={styles.sub}>Key Features Under Development</h3>
      <ul className={styles.list}>
        <li>
          <b>Student Information Management</b>: Centralized storage of student
          records, including personal details, academic performance, attendance,
          and disciplinary records.
        </li>
        <li>
          <b>Teacher and Staff Management</b>: Tools for managing teacher
          schedules, payroll, and performance evaluations.{" "}
        </li>
        <li>
          <b>Classroom Management</b>: Features for creating and managing class
          schedules, assigning teachers, and tracking classroom activities.
        </li>
        <li>
          <b>Communication Tools</b>: Integrated messaging system for
          communication between teachers, students, and parents.
        </li>
        <li>
          <b>Exam and Assessment Management</b>: Modules for creating,
          scheduling, and grading exams and assignments.
        </li>
        <li>
          <b>Report Generation</b>: Automated generation of progress reports,
          report cards, and other academic documents.
        </li>
      </ul>
      <h3 className={styles.sub}>Technologies Used</h3>
      <ul className={styles.list}>
        <li>React</li>
        <li>Node</li>
        <li>MongoDB</li>
      </ul>
      <h3 className={styles.sub}>Role</h3>
      <p className={styles.text}>
        As the sole developer, I was responsible for designing the architecture,
        developing both the front-end and back-end, and deploying the
        application.
      </p>
      <h3 className={styles.sub}>Impact</h3>
      <p className={styles.text}>
        This app has been actively used and tested by Fel-Eben School, providing
        valuable feedback and insights that have shaped its development.
      </p>
      <h3 className={styles.sub}>Testimonials from Fel-Eben Schools</h3>
      <p className={styles.text}>
        "Luke's School Management Software application has transformed how we
        manage conduct and record our tests and exams. Its intuitive interface
        and real-time updates have made a significant impact on our
        productivity.” – Semako Joseph, Head of Department of High School.
      </p>

      {/* ************ */}

      <h2 className={styles.lead}>Propa Exam Software</h2>
      <img className={styles.img} alt="project" src={exam} />
      <h3 className={styles.sub}>App Overview</h3>
      <p className={styles.text}>
        This is an app for taking MCQ questions. The app gets the questions from
        the database, renders it, grades the student's performance, displays the
        result and submits it to the database for future reference.
      </p>
      <h3 className={styles.sub}>Key Features </h3>
      <ul className={styles.list}>
        <li>User authentication and authorization</li>
        <li>Reporting and analytics dashboard</li>
        <li>Grading system</li>
      </ul>
      <h3 className={styles.sub}>Technologies Used</h3>
      <ul className={styles.list}>
        <li>React</li>
        <li>Node</li>
        <li>MongoDB</li>
      </ul>
      <h3 className={styles.sub}>Role</h3>
      <p className={styles.text}>
        As the sole developer, I was responsible for designing the architecture,
        developing both the front-end and back-end, and deploying the
        application.
      </p>
      <h3 className={styles.sub}>Impact</h3>
      <p className={styles.text}>
        This app has been actively used and tested by Fel-Eben School, providing
        valuable feedback and insights that have shaped its development.
      </p>
    </div>
  );
}
