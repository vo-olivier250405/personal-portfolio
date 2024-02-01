import { RefObject } from "react";

export type AdminProps = {
  userData: User;
  projectsData: Project;
};

export type Project = {
  title: string;
  description: string | null;
  picture: string | null;
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
};

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string | null;
  country: string | null;
  birth_date: string | null;
  description: string | null;
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
};

export type CardProps = {
  project: Project;
  onClick: () => void;
};

export type ButtonsProps = {
  deleteButtonOnClick: () => void;
  modifyButtonOnClick: () => void;
};

export type ProjectCardProps = {
  cardProps: CardProps;
  buttonsProps: ButtonsProps;
};

export type AllProjectCardProps = {
  projectsData: Project[];
};

export type FormProps = {
  formIsVisible: boolean;
  setFormIsVisible: (bool: boolean) => void;
  handleSubmit: Function;
  currentProjectId: number | null;
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
