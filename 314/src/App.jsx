import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function eventHandel(event){
    const {name,value} = event.target;
    setContact(preVal=>{
        return{
          ...preVal,
          [name]:value
        };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={eventHandel} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={eventHandel} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={eventHandel} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;