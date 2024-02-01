import { AllProjectCardProps, Project } from "@/types";
import { ProjectCard } from "../molecules";
import { deleteProject } from "@/data";

export const AllProjectsCards = (props: AllProjectCardProps) => {
  return (
    <div>
      {props.projectsData &&
        props.projectsData.map((project: Project, index: number) => {
          return (
            <div
              key={index}
              className="bg-gray-300 m-4 flex-wrap p-4 rounded-md hover:bg-slate-400 ease-in duration-200"
            >
              {
                <ProjectCard
                  cardProps={{
                    project: project,
                    onClick: () => console.log("add function on click"),
                  }}
                  buttonsProps={{
                    deleteButtonOnClick: () => {
                      deleteProject(project.id);
                    },
                    modifyButtonOnClick: () => {},
                  }}
                />
              }
            </div>
          );
        })}
    </div>
  );
};
