import React from "react";
import Li from './Li';
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
          {list.map(li=>{
            return <Li msg={li}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
