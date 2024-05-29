import React from "react";
import styles from "../styles/CV.module.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiLocationEnter, mdiPhone } from "@mdi/js";

import img from "../resources/Luke.jpg";

export default function ClassAssignments() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.img} src={img} alt="Luke Kensu" />
        <div className={styles["header-text"]}>
          <h1 className={styles.name}>Luke Kensu</h1>
          <p className={styles.lead}>
            Engaging High School Teacher Skilled in IT
          </p>
          <div className={styles.contact}>
            <span>
              <Icon path={mdiEmail} size={1} className={styles.svg} />
              Lukekensu14@gmail.com
            </span>
            <span>
              <Icon path={mdiPhone} size={1} className={styles.svg} />
              09032583637
            </span>
            <span>
              <Icon path={mdiLocationEnter} size={1} className={styles.svg} />
              14 Prince Emmagwali Str, Abijo
            </span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.main}>
          <h2 className={styles.section + ` ${styles.bt}`}>Education</h2>
          <div className={styles.title}>
            <h3 className={styles["title-text"]}>
              National Diploma in Electrical and Electronics Engineering
            </h3>
            <p className={styles["title-date"]}>Dec 2017 - Aug 2019</p>
          </div>
          <h3 className={styles.institute}>
            Ogun State Institute of Technology
          </h3>
          <p className={styles.desc}>
            Upon completion of this undergraduate program, I have communication
            (oral and written) skills to investigate, analyze, and present
            technical ideas, information and solutions on electrical and
            electronics engineering problems and projects in a professional,
            independent and organized manner within the professional engineering
            domain.
          </p>

          <div className={styles.title}>
            <h3 className={styles["title-text"]}>Cisco IT Essentials</h3>
            <p className={styles["title-date"]}>Dec 2017 - Aug 2019</p>
          </div>
          <h3 className={styles.institute}>Cisco Netacad, Igbesa</h3>
          <p className={styles.desc}>
            The IT Essentials 1 & 2 courses introduces students to computer
            hardware and software, operating systems, networking concepts,
            mobile devices, IT security and troubleshooting. The materials
            assist the student in developing the skills neccessary to work as a
            technician in the fiel of IT. Upon completion of the program, I have
            developed problem solving, critical thinking, collaboration,
            communication, negotiation, and entreprenueral skills, which can
            help me succeed in today's global workspace.
          </p>

          <div className={styles.title}>
            <h3 className={styles["title-text"]}>
              The Web Developer Bootcamp 2022
            </h3>
            <p className={styles["title-date"]}>Nov 20, 2022</p>
          </div>
          <h3 className={styles.institute}>Udemy</h3>
          <p className={styles.desc}>
            Upon completion of this course, I haved been equiped with a variety
            of practical skills and knowledge essential for building and
            maintaining websites and web applications. I can create and style
            web pages with HTML and CSS, program dynamic elements using
            JavaScript, utilize front-end frameworks, develop server-side
            applications, manage databases, use version control with Git, deploy
            web applications, solve problems and debug code, manage projects
            with agile methodologies, and enhanced communication skills for
            collaborative work.
          </p>

          <div className={styles.title}>
            <h3 className={styles["title-text"]}>
              React - The Complete Guide 2023 (incl. React Router & Redux)
            </h3>
            <p className={styles["title-date"]}>July, 2023</p>
          </div>
          <h3 className={styles.institute}>Udemy</h3>
          <p className={styles.desc}>
            Upon completion of this course, I have been become proficient in
            building sophisticated and interactive user interfaces using React,
            manage application state with Redux, implement navigation with React
            Router, optimize performance, and understand advanced React concepts
            such as hooks, context API, and component lifecycle.
          </p>

          <h2 className={styles.section}>Employment</h2>
          <div className={styles.title}>
            <h3 className={styles["title-text"]}>
              Math and Data Processing Teacher
            </h3>
            <p className={styles["title-date"]}>Jan 2021 - Present</p>
          </div>
          <h3 className={styles.institute}>Fel-Eben Schools, Bogije</h3>
          <p className={styles.desc}>
            I am responsible for preparing lesson plans and educating students
            at all levels. My duties include assigning home work, grading tests,
            and documenting progress. I'm able to instruct in variety of subject
            and reach students with engaging lesson plans and teaching aids.
          </p>

          <h2 className={styles.section}>Extracurricular Activities</h2>
          <div className={styles.title}>
            <h3 className={styles["title-text"]}>Hostel Master</h3>
            <p className={styles["title-date"]}>Sep 2021 - Present</p>
          </div>
          <h3 className={styles.institute}>Fel-Eben Schools, Bogije</h3>
          <p className={styles.desc}>
            I am responsible for the smooth running of the hostel, the
            supervision and guidance of staff, and above all, the safety and
            welfare of the boarding students.
          </p>

          <div className={styles.title}>
            <h3 className={styles["title-text"]}>Assistant Sports Director</h3>
            <p className={styles["title-date"]}>May 2021 - Present</p>
          </div>
          <h3 className={styles.institute}>Fel-Eben Schools, Bogije</h3>
          <p className={styles.desc}>
            I assist the sports director in overseeing sports programs and
            activities in the school.
          </p>

          <h2 className={styles.section}>Notable Achievement</h2>
          <div className={styles.title}>
            <h3 className={styles["title-text"]}>
              Built a School Management App(Still under development)
            </h3>
            <p className={styles["title-date"]}>Dec 2022 - Present</p>
          </div>
          <h3 className={styles.institute}>Fel-Eben Schools, Bogije</h3>
          <div className={styles.desc}>
            I built a comprehensive school management system designed to
            streamline varous administrative and academic processes within
            educational institutions. The app is in its beta phase.
            <h4>Key Features under Development</h4>
            <ol className={styles["ol"]}>
              <li>Student Information Management</li>
              <li>Teacher and Staff Management</li>
              <li>Classroom Management</li>
              <li>Exam and Assessment Management</li>
              <li>Report Generation</li>
            </ol>
            <h4>Recent Exam Test</h4>
            <p>
              To evaluate the app's functionality, I coordinated with Fel-Eben
              School to conduct a live exam using the app. The app was able to
              handle all logins, students found it easy to use and the teachers
              appreciated the automated grading feature, which expedited the
              evaluation process. The positive feedback and constructive critism
              received will guide the next phase of development.
            </p>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.bio}>
            <h2 className={styles.section + ` ${styles.bt}`}>
              Personal Details
            </h2>
            <div className={styles.detail}>
              <span className={styles["bio-name"]}>Date of Birth</span>
              <span className={styles["bio-detail"]}>January 7th, 1998</span>
            </div>
            <div className={styles.detail}>
              <span className={styles["bio-name"]}>Gender</span>
              <span className={styles["bio-detail"]}>Male</span>
            </div>
            <div className={styles.detail}>
              <span className={styles["bio-name"]}>Nationallity</span>
              <span className={styles["bio-detail"]}>Nigerian</span>
            </div>
            <div className={styles.detail}>
              <span className={styles["bio-name"]}>Place of Birth</span>
              <span className={styles["bio-detail"]}>Ajegunle, Lagos</span>
            </div>
            <div className={styles.detail}>
              <span className={styles["bio-name"]}>Civil Status</span>
              <span className={styles["bio-detail"]}>Unmarried</span>
            </div>
          </div>
          <div className={styles.progress}>
            <h2 className={styles.section}>Skills</h2>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Learning</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Creativity</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Patience</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Leadership</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Multitasking</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Critical Thinking</span>
              <div className={styles.bar}></div>
            </div>
          </div>

          <div className={styles.progress}>
            <h2 className={styles.section}>Languages</h2>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>English</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Yoruba</span>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.detail}>
              <span className={styles["progress-name"]}>Pidgin English</span>
              <div className={styles.bar}></div>
            </div>
          </div>

          <div className={styles.hobbies}>
            <h2 className={styles.section}>Hobbies</h2>
            <ul className={styles["ul"]}>
              <li>Coding</li>
              <li>Playing and Watching Football</li>
              <li>Listening to Music</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        I consent to the processing of my personal data for the purpose of
        recruitment for the position to which I'm applying.
      </div>
    </div>
  );
}
