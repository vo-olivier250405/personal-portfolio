import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export const Links = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center p-4 m-4 bg-transparent rounded-md bottom-0 md:flex">
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-red-400 ease-in duration-75 md:text-6xl"
        href="https://github.com/vo-olivier250405"
        target="blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-red-400 ease-in duration-75 md:text-6xl"
        href="https://www.linkedin.com/in/voolivier/"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-red-400 ase-in duration-75 md:text-6xl"
        href="https://www.instagram.com/volivieet/"
        target="blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-red-400 ase-in duration-75 md:text-6xl"
        href="mailto:oliviervo.pro@gmail.com?"
        target="blank"
      >
        <FontAwesomeIcon icon={faMailBulk} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-red-400 ase-in duration-75 md:text-6xl"
        target="blank"
        href="/assets/CV Junior - Bac+2.pdf"
        download="/assets/CV Junior - Bac+2.pdf"
      >
        <FontAwesomeIcon icon={faFile} />: C.V.
      </a>
    </div>
  );
};
