import React from "react";
import Title from "./Title";
import Project from "./Project";

const Projects = () => {
  const projects = ["Magazine", "kampanje", "intervju", "karm", "karm", "karm"];
  const paras = [
    "A magazine website that I developed for a school project. The website is made with React and TailwindCSS.",
    "A campaign website that I developed for a school project. The website is made with React and TailwindCSS.",
    "An interview website that I developed for a school project. The website is made with React and TailwindCSS.",
    "A website that I developed for a school project. The website is made with React and TailwindCSS.",
    "A website that I developed for a school project. The website is made with React and TailwindCSS.",
    "A website that I developed for a school project. The website is made with React and TailwindCSS.",
  ];
  const imageAmounts = [13, 1, 3, 3, 3, 3];

  return (
    <>
      <div id="projects" className="flex flex-col items-center w-full ">
        <Title className="projects" title="Projects" />

        {projects.map((projectName, index) => (
          <Project
            key={projectName}
            para={paras[index]}
            projectName={projectName}
            imageAmount={imageAmounts[index]}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
