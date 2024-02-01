import { Modal } from "../atoms/Modal";
import { useState } from "react";
import { projects } from "@/data";
import { ProjectCardDetails } from "../atoms/ProjectCardDetails";
import { Project } from "@/types";

export const ProjectSection = () => {
  const [modalStates, setModalStates] = useState<boolean[]>(
    projects.map(() => false)
  );
  const allProjects = projects;

  const handleModalToggle = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };

  return (
    <div>
      <h1 className="text-6xl md:p-4 md:m-4">
        <span>PROJECTS</span>
      </h1>
      <hr className="m-4" />
      <div className="grid grid-cols-2 gap-4">
        {allProjects.map((project: Project, index: number) => {
          return (
            <div
              onClick={() => handleModalToggle(index)}
              key={index}
              className="p-4 m-4 rounded-md opacity-60 bg-red-400 hover:bg-red-500 ease-in duration-75"
            >
              <ProjectCardDetails project={project} />
              {modalStates[index] && (
                <Modal>
                  <div>
                    <button onClick={() => handleModalToggle(index)}>X</button>
                    <div className="bg-red flex justify-center items-center">
                      {"BONJOUR JE SUIS LA " + project.title}
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
