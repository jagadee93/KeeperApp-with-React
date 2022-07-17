
import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [notes ,setNotes]=useState([]);
  function addNote(note){
    setNotes((prevValues) => {
      return [...prevValues, {id:notes.length,...note}]
    })
  }
  function deleteNote(id){
    console.log(id)
  setNotes((prevValues) => {
    console.log(prevValues)
    return prevValues.filter((note) =>{
      console.log(note)
      return note.id !== id
    })
  });
  }
  return (
    <div>
      <Header /> 
      <CreateArea onAdd={addNote} />
      {notes.map((note)=>(<Note key={uuidv4()} id={note.id} title={note.title} onDelete={deleteNote} content={note.content} />))}
      <Footer />
    </div>
  );
}

export default App;
