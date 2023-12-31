
import React from 'react';
export default function Page() {
  return (
    <main>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="styles/style.css" />
        <title>Kelvin Vu - Portfolio</title>
      </head>
      <body>
        <header>
          <div className="container">
            <h1>Kelvin Vu</h1>
            <p>CS Student</p>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I am Kelvin, currently in my second year of studying software development at Sait, looking for opportunities to
              incorporate my skills and training to help the company grow. I am looking forward to roles that will help me
              realize my potential by exploring the various aspects of this field.
            </p>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2>Skills</h2>
            <ul>
              <li>Proficient: HTML, CSS, Python, SQL</li>
              <li>Prior Experience: JavaScript, C#</li>
              <li>
                Tools: Visual Studio, Visual Studio Code, Microsoft SQL Server, Xampp, MySQL, Oracle, QuickBooks Pro, SQL*PLUS,
                Software Ideas Modeler, Microsoft Office
              </li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="project-item">
              <h3>Movie Management System (2023)</h3>
              <p>
                Created a movie management system connected to a database, allowing users to perform operations such as adding,
                retrieving, and deleting movies. The project includes user authentication and distinct User and Admin roles.
                Technologies: C#, Xampp, SQL script, Windows Forms Designer.
              </p>
            </div>
            <div className="project-item">
              <h3>Prototype System (2023)</h3>
              <p>
                Designed and implemented sample reports based on the project database, showcasing the system's capabilities.
                Featured joins, single-row functions, restricting rows, sorting data, group functions, accepting user input,
                subqueries, and SQL*PLUS report formatting. Technologies: Oracle, SQL*PLUS, Command Prompt.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:trungkien.vu@edu.sait.ca">trungkien.vu@edu.sait.ca</a></p>
            <p>GitHub: <a href="https://github.com/kelvinvu19" target="_blank">github.com/kelvinvu19</a></p>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2023 Kelvin Vu.</p>
          </div>
        </footer>

        <script src="script.js"></script>
      </body>
    </main>
  );
}
