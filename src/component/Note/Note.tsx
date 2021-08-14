import { FC } from "react";
import { CloseButton } from "react-bootstrap";
import Inote from "../../interfaces/notes.interface";
import "./Note.css";

type Props = {
  note: Inote;
  removeItem: any;
  index: number;
};

const Note: FC<Props> = ({ note, removeItem, index }) => {
  function removeNote() {
    removeItem(index);
  }
  return (
    <>
      <div className="note">
        <div className="remove-note">
          <CloseButton onClick={removeNote} />
        </div>
        <div className="note__text">{note.text}</div>
        <div className="note__link">
          <a href={note.link}>Link</a>
        </div>
      </div>
    </>
  );
};

export default Note;
