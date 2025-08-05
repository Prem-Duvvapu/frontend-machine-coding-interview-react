// Nested file folder structure
// Expand and collapse folders
// Add/Remove file/folder
import { useState } from 'react';
import './style.css';
import json from './data.json';

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
        {
          list.map((node) => (
            <div key={node.id}>
              { 
                node.isFolder && 
                  <span onClick={() => setIsExpanded((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name]
                  }))}
                  >
                    {isExpanded?.[node.name] ? "- " : "+ " }
                  </span> 
              }

              <span>{node.name}</span>
              {node.isFolder && <span onClick={() => addNodeToList(node.id)}><img src="https://cdn-icons-png.flaticon.com/512/3979/3979527.png" alt="icon" className="icon" /></span>}
              <span onClick={() => deleteNodeFromList(node.id)}><img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete-icon" className="icon" /></span>

              { isExpanded?.[node.name] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/> }
            </div>
          ))
        }
      </div>
  );
}

function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id == parentId) {
          return {
            ...node,
            children: [...node.children, {
              "id": Date.now().toString(),
              "name": name,
              "isFolder": true,
              "children": []
            }],
          };
        }

        if (node.children) {
          return { ...node, children: updateTree(node.children)}
        }

        return node;
      })
    }

    setData((prev) => updateTree(prev));
  }

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list.filter((node) => node.id != itemId).map((node) => {
        if (node.children) {
          return {  ...node, children: updateTree(node.children)  }
        }

        return node;
      });
    }

    setData((prev) => updateTree(prev));
  }

  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
    </div>
  )
}

export default App;
