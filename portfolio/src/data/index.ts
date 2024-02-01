import { Project } from "@/types";
import { pointsInner, pointsOuter } from "./utils";
import { faJs, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

export const projects: Project[] = [
  {
    title: "Proet",
    description: null,
    picture: "/assets/logo.png",
    techno: [faPython, faNodeJs, faJs],
  },
  {
    title: "LALAL",
    description: null,
    picture: "/assets/logo.png",
    techno: [faPython, faNodeJs, faJs],
  },
];

export { pointsInner, pointsOuter };
