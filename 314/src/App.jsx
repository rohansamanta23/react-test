import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function eventHandel(event){
    const val = event.target.value;
    const name = event.target.name;
    setContact(preVal=>{
        if(name === "fName"){
            return {
                fName:val,
                lName:preVal.lName,
                email:preVal.email
            };
        } else if(name === "lName"){
            return {
                fName:preVal.fName,
                lName:val,
                email:preVal.email
            };
        } else if(name === "email"){
            return {
                fName:preVal.fName,
                lName:preVal.lName,
                email:val
            };
        }
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
