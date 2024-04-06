import React from "react";

function CreateArea(props) {
  const [data,setData] = React.useState({
    title:"",
    content:""
  });
  function handelChange(event){
    const {name,value} = event.target;
    setData(perVal=>{
      return{
          ...perVal,
          [name]:value
    }});
  }
  return (
    <div>
      <form>
        <input onChange={handelChange} name="title" placeholder="Title" value={data.title} />
        <textarea onChange={handelChange} name="content" placeholder="Take a note..." rows="3" value={data.content} />
        <button onClick={(e) => {
          e.preventDefault();
          props.add(data);
          setData({
            title:"",
            content:""
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
