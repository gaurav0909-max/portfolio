import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import palindrome from "../../Assets/Projects/chatify.png";
import Blog from "../../Assets/Projects/blog.png";

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
              imgPath={palindrome}
              isBlog={false}
              title="Palindrome Checker"
              description="A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."
              ghLink="https://github.com/gaurav0909-max/palindrome-cheker-js"
              demoLink="https://gaurav0909-max.github.io/palindrome-cheker-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={true}
              title="News Blog Using Django"
              description="This is a news blog that gives you latest news with your choice of department like business, sports, entertainment.
                           The project is done using API fetching . In this project we use INSHORTS NEWS API "
              ghLink="https://github.com/gaurav0909-max/news-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Youtube Video Downloader"
              description="First, for rendering graphics, we have used the well-known Tkinter package. Next, we used the Pytube library to create a fully functional GUI to fetch videos from Youtube."
              ghLink="https://github.com/gaurav0909-max/py-youtube-downoader"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
