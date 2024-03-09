import React from "react";

function ToDoItem(props){
    return <div onClick={()=>{
            props.delete(props.id)
        }}>
        <li>{props.msg}</li>
    </div>
}
export default ToDoItem;