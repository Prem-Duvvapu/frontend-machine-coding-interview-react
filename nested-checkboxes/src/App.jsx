import './style.css';
import checkboxesData from './data.json';
import { useState } from 'react';

const CheckBoxes = ({ list, checked, setChecked }) => {
  return (
    <div className="outer">
      {
        list.map((node) => (
          <div className="inner" key={node.id}>
            <input 
              type="checkbox"
              checked={checked[node.id] || false}
              id={node.id}
            />
            <label htmlFor={node.id}>
              {node.name}
            </label>
            {node.children && <CheckBoxes list={node.children} checked={checked} setChecked={setChecked} />}
          </div>
        ))
      }
    </div>
  );
}

function App() {
  const [ checked, setChecked ] = useState({3: true});

  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      <CheckBoxes list={checkboxesData} checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default App
