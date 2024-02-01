import { Project } from "@/types";
import { pointsInner, pointsOuter } from "./utils";
import { faJs, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

export const projects: Project[] = [
  {
    title: "Proet",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia provident quaerat modi quos commodi animi enim voluptate amet voluptatum, praesentium assumenda eveniet aperiam saepe voluptas quam? Labore, placeat debitis.",
    picture: "/assets/logo.png",
    techno: [faPython, faNodeJs, faJs],
  },
  {
    title: "LALAL",
    description: "sqdq",
    picture: "/assets/logo.png",
    techno: [faPython, faNodeJs, faJs],
  },
];

export { pointsInner, pointsOuter };
