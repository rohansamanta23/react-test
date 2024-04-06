import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = useState([]);
  function notesHandel(newNote){
    setNotes(preval=>{
      return [...preval,newNote];
    });
  }

  function handelDelete(id){
    setNotes(preVal=>{
      return preVal.filter((item,index)=>{
        return (index!=id);
      })
    })
  }
  function createNote(curNote,index){
    return <Note key={index} id={index} delete={handelDelete} title={curNote.title} content={curNote.content}/>
  }
  return (
    <div>
      <Header />
      <CreateArea add={notesHandel}/>
        {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
