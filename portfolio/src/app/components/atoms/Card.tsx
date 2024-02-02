import { CardProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props: CardProps) => {
  return (
    <div
      onClick={props.onClick}
      className="w-64 grid m-4 justify-center items-center md:w-fit"
      key={props.key}
    >
      <div className="hidden md:relative md:flex md:justify-center items-center">
        <h1 className="text-sm md:text-2xl p-4 w-fit">{props.project.title}</h1>
        {props.project.techno.map((icon: IconDefinition) => {
          return (
            <FontAwesomeIcon
              key={props.key}
              icon={icon}
              color="white"
              size="2x"
              className="m-1 md:m-4"
            />
          );
        })}
      </div>
      <img
        src={props.project.picture}
        alt="description"
        className="w-96 h-30 justify-center items-center m-auto md:w-3/6 rounded-md border-2 shadow-lg shadow-red-600 hover:shadow-red-400"
      />
    </div>
  );
};
