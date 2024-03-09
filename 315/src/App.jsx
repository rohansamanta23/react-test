import React from "react";
import ToDoItem from './ToDoItem';
function App() {
  const [toDo,setToDo] = React.useState("");
  const [list,setList] = React.useState([]);
  function changeHandler(event){
    const value = event.target.value;
    setToDo(value);
  }
  function clickHandeler(){
    if(toDo.trim() !== ""){
      setList(list=>{
        return [...list,toDo];
      });
    }
    setToDo("");
  }
  function handleDelete(id){
    setList(pre=>{
      return pre.filer((item,index)=>{
        return index !== id;
      });
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} value={toDo}/>
        <button onClick={clickHandeler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((li,index)=>{
            return <ToDoItem msg={li} delete={handleDelete} key={index} id={index}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
