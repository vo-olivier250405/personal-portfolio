import { CardProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props: CardProps) => {
  return (
    <div
      onClick={props.onClick}
      className="grid m-4 justify-center items-center"
    >
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">{props.project.title}</h1>
        {props.project.techno.map((icon: IconDefinition) => {
          return (
            <FontAwesomeIcon
              icon={icon}
              color="white"
              size="2x"
              className="m-4"
            />
          );
        })}
      </div>
      <img
        src={props.project.picture}
        alt="description"
        className="w-32 inset-0"
      />
    </div>
  );
};
