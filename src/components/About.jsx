import React from "react";
import CV from "./Anand_Rastogi_CV.pdf"
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 relative pb-24"  // Added padding to the bottom
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Anand Rastogi, a passionate web developer with expertise in the MERN Stack and a solid foundation in computer science and engineering. With hands-on experience in creating dynamic and visually appealing software solutions, I aim to deliver impactful projects that blend functionality and user-centric design.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
          <strong>B.Tech - Computer Science and Engineering</strong>, KIET Group of Institutions, Ghaziabad, Uttar Pradesh (2021–2025)
          <br />
          <strong>Intermediate Education</strong>, Swami Harsewanand Public School, Varanasi, Uttar Pradesh (80.6%)
          <br />
          <strong>Certifications:</strong> Data Structures and Algorithms Master Course (CodeHelp), AWS Academy Graduate - AWS Academy Cloud Foundations
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          <strong>Programming Languages:</strong> C/C++, Python, JavaScript, HTML/CSS, SQL, Java
          <br />
          <strong>Tools & Frameworks:</strong> React, Linux, TailwindCSS, Material-UI, VS Code, Git, Eclipse
          <br />
          <strong>Core Knowledge Areas:</strong> Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems (DBMS)
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Professional Experience</h1>
        <span>
          <strong>Web Developer Intern</strong>, Hunar Intern (Remote) (July 2023 – August 2023)
          <ul className="list-disc ml-5">
            <li>Designed and implemented a BMI calculator website with a user-friendly interface.</li>
            <li>Developed responsive layouts ensuring compatibility across devices.</li>
            <li>Enabled real-time input validation to enhance user experience.</li>
          </ul>
          <br />
          <strong>Freelance Projects:</strong>
          <ul className="list-disc ml-5">
            <li><strong>Interactive Code Editor:</strong> Built using React and Material-UI, featuring syntax highlighting and real-time preview.</li>
            <li><strong>Sorting Visualizer:</strong> Developed an engaging visualization tool to demonstrate sorting algorithms using HTML, CSS, and JavaScript.</li>
            <li><strong>NewsNexus:</strong> Designed a news website with dynamic content fetched via the News API and interactive navigation.</li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Achievements & Awards</h1>
        <span>
          <ul className="list-disc ml-5">
            <li>Solved 500+ problems on LeetCode.</li>
            <li>Earned a 900+ rating on Codeforces.</li>
            <li>Achieved a 1140+ rating on CodeChef.</li>
            <li>Participated in 30+ competitive programming contests.</li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          My mission is to innovate and deliver cutting-edge web solutions while excelling in the ever-evolving tech landscape. Committed to continuous growth, I aim to merge creativity and technical prowess to drive impactful digital transformation.
        </p>
      </div>

      {/* Download CV Button (Centered at the Bottom) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href={CV} // Update with your actual file path
          download="./Anand_Rastogi_CV.pdf"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
