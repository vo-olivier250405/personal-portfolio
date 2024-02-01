import { RefObject, useRef } from "react";
import { NavBar } from "../molecules";
import { ContactMeSection } from ".";
import { AboutMeSection } from ".";
import { ProjectSection } from ".";

export const AllSections = () => {
  const allScrollsTarget: { [key: string]: RefObject<HTMLElement> } = {
    homeTargetScroll: useRef<HTMLElement>(null),
    aboutMeTargetScroll: useRef<HTMLElement>(null),
    projectsTargetScroll: useRef<HTMLElement>(null),
    contactMeTargetScroll: useRef<HTMLElement>(null),
  };

  return (
    <div>
      <section
        className="w-screen h-screen"
        ref={allScrollsTarget["homeTargetScroll"]}
      >
        {/* <SceneSphere /> */}
        <NavBar allScrollTargets={allScrollsTarget} />
      </section>

      <section
        className="w-screen h-screen p-4"
        ref={allScrollsTarget["aboutMeTargetScroll"]}
      >
        <AboutMeSection />
      </section>

      <section
        className="w-screen h-screen p-4"
        ref={allScrollsTarget["projectsTargetScroll"]}
      >
        <ProjectSection />
      </section>

      <section
        className="w-screen h-screen p-4"
        ref={allScrollsTarget["contactMeTargetScroll"]}
      >
        <ContactMeSection />
      </section>
    </div>
  );
};
