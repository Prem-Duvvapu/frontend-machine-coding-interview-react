// TODO: If all the children are checked/unchecked then mark the parent as same.

import { useState } from 'react';
import './style.css';
import checkboxesData from './data.json';

const CheckBoxes = ({ list, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { 
        ...prev, 
        [node.id]: isChecked,
      };

      // If parent is checked/unchecked then mark all of its children as same.
      const updateChildren = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        })
      }
      updateChildren(node);

      // If all the children are checked/unchecked then mark the parent as same.

      return newState;
    });
  };

  return (
    <div className="outer">
      {
        list.map((node) => (
          <div className="inner" key={node.id}>
            <input 
              type="checkbox"
              checked={checked[node.id] || false}
              id={node.id}
              onChange={(e) => handleChange(e.target.checked, node)}
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
  const [ checked, setChecked ] = useState({});

  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      <CheckBoxes list={checkboxesData} checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App
