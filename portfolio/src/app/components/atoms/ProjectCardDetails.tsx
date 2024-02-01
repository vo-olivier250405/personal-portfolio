import { ProjectCardDetailsProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectCardDetails = (props: ProjectCardDetailsProps) => {
  return (
    <div className="bg-gray-700 shadow-2xl shadow-white rounded-md w-fit p-8 m-4 justifiy-center items-center">
      <h1 className="text-white">{props.project.title}</h1>
      <hr className="m-4" />
      <div className="flex">
        {props.project.techno.map((icon: IconDefinition) => {
          return (
            <FontAwesomeIcon
              icon={icon}
              color="white"
              size="3x"
              className="m-4 flex justify-center items-center"
            />
          );
        })}
      </div>

      <p className="italic p-8 justify-center items-center flex text-white">
        {props.project.description}
      </p>

      <img
        src={props.project.picture}
        alt="description"
        className="inset-0 w-7/12 m-auto rounded-md "
      />
    </div>
  );
};
