import React from "react";

function App() {
  const [currentColor,setCurrentColor] = React.useState('white');
  let btnColors = ["Red","Green","Blue","Olive","Gray","Yellow","Pink","Purple","Lavender","White","Black"];
  function handelColor(color) {
    setCurrentColor(color)
  }
  return (
    <div className="colorChanger" style={{backgroundColor:currentColor}}>
      <div className="container px-1 rounded-lg py-8 border-2 border-black">
        {btnColors.map((color, index) => {
          return (
            <button
              onClick={() => handelColor(color)}
              style={{
                backgroundColor: color,
                color: color == "Black" ? "white" : "black",
              }}
              className="p-2 border-gray border-2 rounded-lg mx-1"
              key={index}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
