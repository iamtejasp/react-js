import { useState } from "react";

const arrayInitialValue = ["A", "B", "C"];

const ArrayStateProject = () => {
  const [array, setArray] = useState(arrayInitialValue);
  const [inputValue, setInputValue] = useState(null);

  //* Remove first element from Array
  const removeFirstElement = () => {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  };

  //* Remove specific element from Array
  const removeSpecificElement = (letter) => {
    setArray((currentArray) => {
      return currentArray.filter((i) => i !== letter);
    });
  };

  //* Add element in start
  const addToStart = (letter) => {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  };

  //* Add element in end
  const addToEnd = (letter) => {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  };

  //* reset the array
  const reset = () => {
    setArray(arrayInitialValue);
  };

  //* clear the array
  const clear = () => {
    setArray([]);
  };

  //* Change specific letter
  const changeLetter = (currentLetter, changeLetter) => {
    setArray((currentArray) => {
      return currentArray.map((i) => (i === currentLetter ? changeLetter : i));
    });
  };

  //* add input value
  const addInputValueTOArray = (value) => {
    setArray((currentArray) => {
      return [value, ...currentArray];
    });
  };

  //* Add value in specific index
  const addLetterArrayIndex = (letter, index) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  };

  return (
    <>
      <div>
        <button onClick={reset}>Reset</button>

        <button onClick={clear}>Clear</button>
        <br />
        <br />
        <button onClick={removeFirstElement}>Remove first element</button>
        <br />
        <br />
        <button onClick={() => removeSpecificElement("B")}>
          Remove All Bs
        </button>
        <br />
        <br />
        <button onClick={() => addToStart("A")}>Add to start</button>
        <br />
        <br />
        <button onClick={() => addToEnd("D")}>Add to end</button>

        <br />
        <p>*******************************************************</p>
        <button onClick={() => changeLetter("A", "H")}>Update A to H</button>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => addInputValueTOArray(inputValue)}>
          Add value
        </button>
        <br />
        <br />
        <button onClick={() => addLetterArrayIndex("T", 2)}>
          Add specific index value
        </button>
      </div>
      <br />
      <br />
      {array.join(", ")}
    </>
  );
};

export default ArrayStateProject;
