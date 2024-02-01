import { Project, ProjectSectionProps } from "@/types";

export const ProjectSection = () => {
  const project: Project[] = [];
  return (
    <div>
      <h1 className="text-6xl md:p-4 md:m-4">
        <span>PROJECTS</span>
      </h1>
      <hr className="m-4" />
      <div className="grid grid-cols-2 gap-4">
        {project.map((project: Project, index: number) => {
          return (
            <div
              key={index}
              className="p-4 m-4 rounded-md opacity-60 bg-red-400 hover:bg-red-500 ease-in duration-75"
            >
              <h1 className="text-sm md:text-5xl text-white">Titire</h1>
              <hr className="m-4" />
              <p className="text-sm md:text-2xl italic text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora dignissimos odit, ex blanditiis non inventore ea
                voluptatum quam assumenda. Eius labore voluptatibus deleniti
                harum ipsam repellendus odio eligendi similique! Ex.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
