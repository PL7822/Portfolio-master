import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandMysql } from 'react-icons/tb';
import { BiLogoCss3 } from 'react-icons/bi';
import { FaHtml5 } from 'react-icons/fa';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,

} from "react-icons/di";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
        <BiLogoCss3 />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
        <TbBrandMysql/>
      </Col>

    </Row>
  );
}

export default Techstack;
