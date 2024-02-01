import { Project } from "@/types";
import { pointsInner, pointsOuter } from "./utils";
import {
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const projects: Project[] = [
  {
    title: "Financial Dashboard",
    description: "Python app wich allows to compare 2 market curves.",
    picture: "/assets/logo.png",
    techno: [faPython],
  },
  {
    title: "Moissan Fighter Video Game",
    description:
      "Video game retro style. In this game you can choose characters and make them fight.",
    picture: "/assets/logo.png",
    techno: [faPython],
  },
  {
    title: "Gamify Tasks",
    description:
      "Web app to gamify tasks, with points system, level ranking and to do list.",
    picture: "/assets/logo.png",
    techno: [faNodeJs, faJs, faReact],
  },
  {
    title: "Web Organization app",
    description:
      "Web app to organize school tasks, like downloading files, seeing schedules etc...",
    picture: "/assets/logo.png",
    techno: [faPython],
  },
];

export { pointsInner, pointsOuter };
