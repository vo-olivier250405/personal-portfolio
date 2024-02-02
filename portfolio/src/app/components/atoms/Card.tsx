import { CardProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props: CardProps) => {
  return (
    <div
      onClick={props.onClick}
      className="grid m-4 justify-center items-center w-fit"
      key={props.key}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-2xl p-4 w-fit">{props.project.title}</h1>
        {props.project.techno.map((icon: IconDefinition) => {
          return (
            <FontAwesomeIcon
              key={props.key}
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
        className="m-auto w-3/6 rounded-md border-2 shadow-lg shadow-red-600 hover:shadow-red-400"
      />
    </div>
  );
};
