import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Book-Site"
              description="Welcome to Book Sites, your go-to platform for discovering and exploring a wide range of books across various genres. Whether you're a passionate reader or someone looking to find your next great read, we've got you covered."
              ghLink="https://github.com/PL7822/Book-Site"
              demoLink="https://app.netlify.com/projects/book-sites/overview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Dnyandeep College-Web"
              description=" Dnyandeep Mahavidyalaya Palam is dedicated to providing quality education 
      and holistic development. We offer programs like BCA, BSc, BA, and BCom, 
      guided by experienced faculty and modern facilities to prepare students 
      for a successful future."
              ghLink="https://github.com/PL7822/College-Web"
              demoLink="https://68d190229c58a42ff16206ae--glistening-naiad-be5d1a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="wanderlust"
              description= "Wanderlust is a travel and accommodation platform that helps users discover and book unique stays across the world  From cozy villas to luxury resorts, we provide a wide range of options to make every journey memorable and comfortable."
              ghLink="https://github.com/PL7822/wanderlust"
              demoLink="https://wanderlust1-e0lv.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="software-company-web"
              description=" We are a software solutions company focused on building modern, reliable,  and scalable applications. Our mission is to help businesses grow through technology by delivering customized web and mobile solutions with innovation, quality, and efficiency."
              ghLink="https://github.com/PL7822/IT-Software-Company-Business-Website"
              demoLink="https://app.netlify.com/projects/software-company-web/overview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="My-Portfolio"
              description="      This is my personal portfolio website built to showcase my skills,
      projects, and journey as a web developer. It highlights my work in HTML, CSS, and JavaScript with a simple and responsive design."
              ghLink="https://github.com/PL7822/My-Portfolio"
              demoLink="https://cosmic-otter-bb873f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="photography-Web"
              description=" We are a creative photography agency dedicated to capturing moments with
      passion and precision. From portraits to events, we deliver high-quality,
      timeless photographs that tell your story beautifully."
              ghLink="https://github.com/PL7822/Photography-Web"
              demoLink="https://photography-webb.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
