import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "HTML, CSS & JavaScript Enthusiast",
          "C Programmer",
          "Cyber Security Learner",
          "Gamer & Music Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
