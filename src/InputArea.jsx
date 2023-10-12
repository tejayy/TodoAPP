import { useState } from "react";

const InputArea = (props) => {

    const [inputText , setInputText] = useState('');

    function handleChange(e) {
        const newValue = e.target.value;
        setInputText(newValue);
    }
    return (
        <div className="form">
          <input onChange={handleChange} value={inputText} type="text" />
          <button onClick={() => {
            props.onAdd(inputText);
            setInputText('');
          }} >
            <span>ADD</span>
          </button>
        </div>
    );
}
 
export default InputArea;