import { Project } from "@/types";
import { pointsInner, pointsOuter } from "./utils";
import {
  faGithub,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

export const projects: Project[] = [
  {
    id: 1,
    title: "Financial Dashboard",
    description: "Python app wich allows to compare 2 market curves.",
    picture: "/assets/pythonFinance.png",
    techno: [faPython, faGithub],
  },
  {
    id: 2,
    title: "Moissan Fighter Video Game",
    description:
      "Retro-style fighting game project, developed in python as a group.",
    picture: "/assets/mfZ.png",
    techno: [faPython, faGithub],
  },
  {
    id: 3,
    title: "Gamify Tasks",
    description:
      "Web app to gamify tasks, with points system, level ranking and to do list. Using mariadb database, Prisma ORM, NodeJS and NextJS for the front",
    picture: "/assets/gamifyTasks.png",
    techno: [faNodeJs, faJs, faReact, faDatabase, faServer, faGithub],
  },
  {
    id: 4,
    title: "Web Organization app",
    description:
      "Web app to organize school tasks, like downloading files, seeing schedules etc... Using Python, Selenium",
    picture: "/assets/webapp.png",
    techno: [faPython, faGithub],
  },
];

export { pointsInner, pointsOuter };
