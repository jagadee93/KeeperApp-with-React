import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
	const [isClicked,setIsClicked] = useState(false);
 const [note,setNote]=useState({title:"",content:""});
 function onChangeIpHandler(event) {
  setNote({...note,title:event.target.value})
   }
 function onChangeTextAreaHandler(event) {
  setNote({...note,content:event.target.value})
 }
  return (
    <div>
      <form className="create-note" onSubmit={(e) =>{
        e.preventDefault();
        props.onAdd(note);
        setNote({title:"",content:""})
      }} >
        {isClicked && <input 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onChange={onChangeIpHandler}

          />}
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows={isClicked ? 3:1}
          value={note.content} 
          onChange={onChangeTextAreaHandler}
					onClick={() =>{
						setIsClicked(true);
					}}

          />
          {isClicked &&<Zoom in={isClicked}>
        <Fab type="submit"> <AddIcon /></Fab>
        </Zoom>}
      </form>
    </div>
  );
}