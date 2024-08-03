import { useState, useCallback, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) {
      char += "01234567789";
    }
    if (charAllowed) {
      char += "~!@#$%^&*-+";
    }
    for (let index = 1; index <= length; index++) {
      let rando = Math.floor(Math.random() * char.length + 1);
      pass += char.charAt(rando);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <div className=" rounded-sm border-indigo-500/100">
        <input
          type="text"
          value={password}
          placeholder="Password Generator"
          readOnly
        />
        <button>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={4}
          max={30}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          value={numAllowed}
          onChange={()=>{setNumAllowed(prev=>!prev)}}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          value={charAllowed}
          onChange={(e) => {
            setCharAllowed(e.target.value);
          }}
        />
        <label>Charertors</label>
      </div>
    </>
  );
}

export default App;
