import { useState } from 'react';
import './App.css';
import DeleteImg  from "./images/trash-can.png";

function App() {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);

  const addItem = (item) => {
    const newItem = {
      id: item,
      item:item
    }

    setToDo([...toDo, newItem]);
    setInput("");
  }
  
  const deleteItem = (id) => {
    const oldList = toDo.filter((todo) => todo.id !== id);
    setToDo(oldList);
  }

  return (
    <div>
      <h1>To Do List</h1>
        <div className="input-component" type="submit">
          <h4>Add Task:</h4>
          <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          /> 
          <button type="submit" onClick={() => addItem(input)}>Add</button>          
        </div>
      {toDo.map((todo) => (
        <li className="list-component" key={todo.id}>{todo.id}
          <img src={DeleteImg} onClick={() => deleteItem(todo.id)} className="image"></img>
        </li>
        ))}
    </div>
  );
}

export default App;
