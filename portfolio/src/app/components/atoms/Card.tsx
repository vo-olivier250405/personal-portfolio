import { CardProps } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props: CardProps) => {
  return (
    <div onClick={props.onClick}>
      <h1 className="text-4xl">{props.project.title}</h1>
      <br />
      {props.project.techno.map((icon: IconDefinition) => {
        return <FontAwesomeIcon icon={icon} />;
      })}
      <img src={props.project.picture} alt="description" />
    </div>
  );
};
