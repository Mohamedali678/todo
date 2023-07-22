import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");

  const [todos, setTodos] = useState([]);

  const handleForm = (event) => {
    event.preventDefault();
    if (newItem) {
      setTodos([...todos, newItem]);
      setNewItem("");
    }
  };

  const handleDelete = (index) => {
    const data = [...todos];
    data.splice(index, 1);
    setTodos(data);
  };

  return (
    <div className="main">
      <h1>My todos</h1>

      <form>
        <input
          placeholder="Enter to do item"
          value={newItem}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />{" "}
        <button onClick={handleForm}>Add Item</button>
      </form>

          <div className="todo"> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={handleDelete}>Delete</button>{" "}
          </li>
        ))}
      </ul>

      </div>


    </div>
  );
}
export default App;
