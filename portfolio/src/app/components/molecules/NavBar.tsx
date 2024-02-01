import { NavBarProps } from "@/types";
import { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faHome,
  faPhone,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props: NavBarProps) => {
  const handleOnClick = (target: RefObject<HTMLElement>) => {
    console.log("here", target);
    target.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed grid top-0 right-0 p-1 m-4 rounded-md bg-red-400 bg-opacity-70 md:flex">
      <button
        className="m-4 p-1 hover:bg-red-300 ease-in duration-75 rounded-md md:p-4"
        onClick={() =>
          handleOnClick(props.allScrollTargets["homeTargetScroll"])
        }
      >
        <p className="md:grid sm: hidden">Home</p>
        <FontAwesomeIcon className="md:hidden p-1" icon={faHome} />
      </button>

      <button
        className="m-4 p-1  hover:bg-red-300 ease-in duration-75 rounded-md md:p-4"
        onClick={() =>
          handleOnClick(props.allScrollTargets["aboutMeTargetScroll"])
        }
      >
        <p className="md:grid sm: hidden">About Me</p>
        <FontAwesomeIcon className="md:hidden p-1" icon={faUser} />
      </button>

      <button
        className="m-4 p-1 hover:bg-red-300 ease-in duration-75 rounded-md md:p-4"
        onClick={() =>
          handleOnClick(props.allScrollTargets["projectsTargetScroll"])
        }
      >
        <p className="md:grid sm: hidden">Projects</p>
        <FontAwesomeIcon className="md:hidden p-1" icon={faComputer} />
      </button>

      <button
        className="m-4 p-1 hover:bg-red-300 ease-in duration-75 rounded-md md:p-4"
        onClick={() =>
          handleOnClick(props.allScrollTargets["contactMeTargetScroll"])
        }
      >
        <p className="md:grid sm: hidden">Contact Me</p>
        <FontAwesomeIcon className="md:hidden p-1" icon={faPhone} />
      </button>

      <img
        src="assets/logo.png"
        alt="logo"
        className="w-16 h-16 m-4 md:block hidden"
        onClick={() =>
          handleOnClick(props.allScrollTargets["homeTargetScroll"])
        }
      />
    </div>
  );
};
