import { CardProps } from "@/types";

export const Card = (props: CardProps) => {
  return (
    <div onClick={props.onClick}>
      <h1 className="text-4xl">{props.project.title}</h1>
      <br />
      <p className="italic">{props.project.description}</p>
    </div>
  );
};
