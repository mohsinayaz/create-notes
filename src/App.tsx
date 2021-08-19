import { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import AddNote from "./component/Note/AddNote";
import Note from "./component/Note/Note";
// import axios from "axios";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Inote from "./interfaces/notes.interface";

function App() {
  const [noteList, setNoteList] = useState<Inote[]>([]);
  const addNote = (note: Inote) => {
    const newList = [...noteList, note];
    // localStorage.setItem("notes", JSON.stringify(newList));
    console.log(newList);
    setNoteList(newList);
  };
  const removeNote = (noteIndex: number) => {
    console.log(noteIndex);
    const newList = noteList.filter((_, i) => i !== noteIndex);
    // localStorage.setItem("notes", JSON.stringify(newList));
    setNoteList(newList);
  };
  const updateNoteItem = (updatedNote: Inote) => {
    const updateItemArray = noteList.map((note) => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      }
      return note;
    });
    setNoteList(updateItemArray);
    // localStorage.setItem("notes", JSON.stringify(noteList));
  };
  // async function getNotes() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
  //     setNoteList(response.data.notes);
  //     console.log(noteList);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    const listFromStorage = localStorage.getItem("notes");
    if (listFromStorage) {
      setNoteList(JSON.parse(listFromStorage!));
    } else {
      setNoteList(DUMMY_NOTES);
    }
  }, []);
  useEffect(() => {
    const newStringNotelist = JSON.stringify(noteList);
    localStorage.setItem("notes", newStringNotelist);
  }, [noteList]);
  return (
    <div className="App">
      {/* <div>Notes Application</div> */}
      {/* <div>
        <button onClick={getNotes}>Click Me!</button>
      </div> */}
      <div className="add-note">
        <AddNote recieveNote={addNote} />
      </div>
      <div className="notes-list">
        {noteList.length === 0 ? (
          <h4>No Notes Available</h4>
        ) : (
          noteList.map((noteItem, index) => {
            return (
              <Note
                note={noteItem}
                updateNote={updateNoteItem}
                removeItem={removeNote}
                key={index}
                index={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
