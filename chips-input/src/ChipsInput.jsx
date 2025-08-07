import React, { useState } from "react";
import './styles.css'


function ChipsInput() {
  const [ input, setInput ] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips([...chips, input]);
      setInput("");
    }
  }

  const handleXclick = (index) => {
    const temp = [...chips];
    temp.splice(index, 1);
    setChips(temp);
  }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="chip-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <button
              className="x-btn"
              onClick={() => handleXclick(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;