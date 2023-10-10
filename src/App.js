import React, {useState} from 'react';


function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange (e) {
    const newValue = e.target.value;

    setInputText(newValue);
  }

  function addItem( ) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>TODO List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text"  value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
