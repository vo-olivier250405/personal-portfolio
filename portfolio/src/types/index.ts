import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RefObject } from "react";

export type Project = {
  title: string;
  description: string | null;
  picture: string;
  techno: IconDefinition[];
};

export type CardProps = {
  project: Project;
  onClick: () => void;
};

export type AllProjectCardProps = {
  projectsData: Project[];
};

export type projectProps = {
  title: "";
  description: "";
  enabled: boolean;
};

export type NavBarProps = {
  allScrollTargets: { [key: string]: RefObject<HTMLElement> };
};

export type ProjectSectionProps = {
  project: Project[];
};

export type ProjectCardDetailsProps = { project: Project };
