import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(notes) {
    setNotes((prev) => {
      return [...prev, notes];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((notes, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notesItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
