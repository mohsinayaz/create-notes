import { Button } from "react-bootstrap";
import "./AddNote.css";

function AddNote(props: any) {
  function CreateNotes(event: any) {
    event.preventDefault();
    const notes = {
      text: event.target.text.value,
      link: event.target.link.value,
    };
    event.target.text.value = "";
    event.target.link.value = "";
    props.recieveNote(notes);
  }
  return (
    <>
      <h1>Add Note</h1>
      <form className="add" onSubmit={CreateNotes}>
        <div className="text">
          <label>Text</label>
          <input type="text" id="text" />
        </div>
        <div className="link">
          <label>Link</label>
          <input type="text" id="link" />
        </div>
        <div className="submitButton">
          <Button type="submit" variant="primary">
            Create Notes
          </Button>{" "}
        </div>
      </form>
    </>
  );
}

export default AddNote;
