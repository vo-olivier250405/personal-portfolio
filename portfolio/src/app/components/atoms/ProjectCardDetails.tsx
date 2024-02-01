import { ProjectCardDetailsProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectCardDetails = (props: ProjectCardDetailsProps) => {
  return (
    <div className=" justifiy-center items-center">
      <h1>{props.project.title}</h1>
      {props.project.techno.map((icon: IconDefinition) => {
        return (
          <FontAwesomeIcon
            icon={icon}
            color="white"
            size="4x"
            className="m-4"
          />
        );
      })}
      <p className="italic">{props.project.description}</p>
      <img
        src={props.project.picture}
        alt="description"
        className="w-32 inset-0"
      />
    </div>
  );
};
