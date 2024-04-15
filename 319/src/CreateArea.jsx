import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [pop,setPop] = useState(false);

  function handelPopUp(){
    setPop(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onClick={handelPopUp} className="create-note">
        {pop&&<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={pop?"3":"1"}
        />
        {pop&&<Zoom in={pop}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>}
        
      </form>
    </div>
  );
}

export default CreateArea;
