import React, { useState } from "react";
import './App.css';
import ItemAll from './components/ItemAll/Index';
import ItemActive from './components/ItemActive/Index';
import ItemCompleted from './components/ItemCompleted/Index';
import BoxInput from './components/Input/BoxInput';
import CompletedForm from "./components/Input/CompletedForm";

function App() {
  const [selectedItems, setSelectedItems] = useState([true, false, false]);
  const [inputValue, setInputValue] = useState("");
  const [showBoxInput, setShowBoxInput] = useState(true);
  const [showCompletedForm, setShowCompletedForm] = useState(false);
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleItemClick = (index) => {
    const updatedSelectedItems = selectedItems.map((item, i) => i === index);
    setSelectedItems(updatedSelectedItems);

    if (index === 0 || index === 1) {
      setShowBoxInput(true);
      setShowCompletedForm(false);
    } else {
      setShowBoxInput(false);
      setShowCompletedForm(true);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSubmittedValues([...submittedValues, inputValue]);
      setInputValue("");
    }
  };

  const handleClick = (event) => {
    // ... (existing code)
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <div className='Content'>
        <ItemAll isSelected={selectedItems[0]} onClick={() => handleItemClick(0)} />
        <ItemActive isSelected={selectedItems[1]} onClick={() => handleItemClick(1)} />
        <ItemCompleted isSelected={selectedItems[2]} onClick={() => handleItemClick(2)} />
      </div>
      <div className='box-input'>
        {showBoxInput && (
          <BoxInput
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            submittedValues={submittedValues}
            onItemClick={handleClick}
          />
        )}
      </div>
      <div className='completed-form'>
        {showCompletedForm && <CompletedForm />}
      </div>
    </div>
  );
}

export default App;
