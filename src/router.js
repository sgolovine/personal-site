import React from "react";
import Home from "pages/home";
import Projects from "pages/projects";
import Contact from "pages/contact";
import Resume from "pages/resume";
import { Router } from "@reach/router";
import { Header } from "containers/Header";

const SiteRouter = () => (
  <Router>
    <Home path="/" />
    <Projects path="/projects" />
    <Contact path="/contact" />
    <Resume path="/resume" />
  </Router>
);

export default () => {
  return (
    <Header>
      <SiteRouter />
    </Header>
  );
};
