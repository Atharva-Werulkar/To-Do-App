import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Add a new task"]);

  const [value, setValue] = useState("");

  function onValueChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  function onAdd() {
    console.log("Add button clicked");
    console.log(value);

    const newItems = [...items, value];
    setItems(newItems);
    setValue("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> ToDo List </h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={value}
          onChange={onValueChange}
          
        />

        <button
         
          onClick={onAdd}
        >
          Add
        </button>

        {/* display the list of items in box */}
        <div id="items-box">
          {items.map((item, index) => (
            <div id="item" key={index}>{item}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
