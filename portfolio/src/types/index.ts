import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RefObject } from "react";

export type Project = {
  id: number;
  title: string;
  description: string | null;
  picture: string;
  techno: IconDefinition[];
};

export type CardProps = {
  project: Project;
  onClick: () => void;
  key: number;
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

export type ProjectCardDetailsProps = { project: Project; key: number };
