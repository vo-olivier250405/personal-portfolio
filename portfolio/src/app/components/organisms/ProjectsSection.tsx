import { Project } from "@/types";
import { projects } from "@/data";
import { ProjectCardDetails } from "../atoms/ProjectCardDetails";
import { useState } from "react";
import { Modal } from "../atoms/Modal";
import { Card } from "../atoms";

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const allProjects = projects;

  return (
    <div>
      <h1 className="text-6xl md:p-4 md:m-4">
        <span>PROJECTS</span>
      </h1>
      <hr className="m-4" />
      <div className="grid grid-cols-2 gap-4">
        {allProjects.map((project: Project, index: number) => (
          <div
            onClick={() => handleProjectClick(project)}
            key={index}
            className="p-4 m-4 rounded-md opacity-60 bg-red-400 hover:bg-red-500 ease-in duration-75"
          >
            <Card project={project} onClick={() => {}} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal onClose={handleCloseModal}>
          <div className="flex justify-center items-center mt-8">
            <ProjectCardDetails project={selectedProject} />
          </div>
        </Modal>
      )}
    </div>
  );
};
