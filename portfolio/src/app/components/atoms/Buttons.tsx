import { ButtonsProps } from "@/types";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <br />
      <button
        onClick={props.deleteButtonOnClick}
        className="p-4 hover:bg-slate-500 rounded-md"
      >
        <FontAwesomeIcon icon={faTrash} className="icon" />
      </button>
      <button
        onClick={props.modifyButtonOnClick}
        className="p-4 hover:bg-slate-500 rounded-md"
      >
        <FontAwesomeIcon icon={faPen} className="icon" />
      </button>
    </div>
  );
};
