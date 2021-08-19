import { FC, FocusEvent } from "react";
import { CloseButton } from "react-bootstrap";
import Inote from "../../interfaces/notes.interface";
import "./Note.css";

type Props = {
  note: Inote;
  updateNote: Function;
  removeItem: Function;
  index: number;
};

const Note: FC<Props> = ({ note, removeItem, updateNote, index }) => {
  function removeNote() {
    removeItem(index);
  }
  function noteTextUpdate(event: FocusEvent<HTMLDivElement>) {
    const newTextValue = event.target.textContent;
    if (newTextValue === note.text) {
      return;
    }
    const updatedNoteItem = {
      ...note,
      text: newTextValue,
    };
    updateNote(updatedNoteItem);
  }
  return (
    <>
      <div className="note">
        <div className="remove-note">
          <CloseButton onClick={removeNote} />
        </div>
        <div
          onBlur={noteTextUpdate}
          className="note__text"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {note.text}
        </div>
        <div className="note__link">
          <a href={note.link}>Link</a>
        </div>
      </div>
    </>
  );
};

export default Note;
