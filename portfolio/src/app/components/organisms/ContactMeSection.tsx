import { Links } from "../molecules";

export const ContactMeSection = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-red-400 m-4 p-4 sm:text-8xl">
        <span className="text-red-400">CONTACT ME</span>
      </h1>
      <hr className="m-4" />
      <div className="grid items-center justify-center h-40 p-64">
        <a
          className="text-3xl m-4 p-4 text-white hover:text-red-400 ease-in duration-75 md:text-8xl"
          href="mailto:oliviervo.pro@gmail.com?"
          target="blank"
        >
          oliviervo.pro@gmail.com
        </a>
        <p className="m-auto mt-1 text-1xl text-white hover:text-red-400 ease-in duration-75 md:text-3xl">
          · 06 41 30 53 80 · Meaux, 77100 France ·
        </p>
        <Links />
      </div>
    </div>
  );
};
