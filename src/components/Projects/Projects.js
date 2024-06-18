import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/kingsukh.png";
import emotion from "../../Assets/Projects/E-book.jpg";
import editor from "../../Assets/Projects/instaclone.jpg";
import chatify from "../../Assets/Projects/parallax.jpg";
import suicide from "../../Assets/Projects/ioa.png";
import bitsOfCode from "../../Assets/Projects/travel.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Kingsukh-GuestHouse"
              description="Responsible for the development of a sleek and user-friendly GuestHouse website, leveraging React JS and CSS. Directed designefforts to ensure an intuitive interface and optimized performance.Rigorously tested for cross-browser compatibility to guarantee aseamless experience for all users."
              ghLink="https://github.com/abhijitpadhy/kingsukh.git"
              demoLink="https://kingsukh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Irish Odia Association"
              description="Developed the front-end of the Irish Odia Association website usingReact JS and CSS. Ensured it worked well on all devices, optimizedperformance, made navigation user-friendly, and tested it acrossdifferent browsers for compatibility."
              ghLink="https://github.com/abhijitpadhy/iris-odisha-association.git"
               demoLink="https://iris-odisha-association.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Instagram-clone"
              description="Led the development of a full-stack Instagram Clone for MCAcoursework, utilizing React JS, Node.js, Express.js, andMongoDB. Prioritized responsive design, seamless userexperience, and efficient data management."
              ghLink="https://github.com/abhijitpadhy/instagram.git"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-book shop"
              description="Designed and implemented an E-Book Management Systems a key project in my MCA program. Utilized Advanced Java(JEE) and MySQL technologies, overseeing the entire development lifecycle from system architecture to testing and deployment."
              ghLink="https://github.com/abhijitpadhy/ebook.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Parallax Website"
              description="I designed and developed a visually engaging parallax scrolling website using HTML and CSS. The site leverages smooth, dynamic scrolling effects to create an immersive user experience, showcasing modern web design techniques."
              ghLink="https://github.com/abhijitpadhy/jungle-paralax.git"
              demoLink="https://jungle-paralax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Travelo Website"
              description="Developed a dynamic and responsive travel booking website, TravelO, using React JS and CSS. Ensured the site is fully responsive, providing an optimal user experience across various devices and screen sizes."
              ghLink="https://github.com/abhijitpadhy/Travel-react.git"
              demoLink="https://travel-react-liart.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
