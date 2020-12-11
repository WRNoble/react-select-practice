import logo from "./logo.svg";
import React from "react";
import CustomSelect from "./CustomSelect";
import "./App.css";

const options = [
  { label: "react", value: "react" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "js" },
];

function onChangeInput(value) {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      Select Practice
      <CustomSelect
        label="Select A Genre"
        onChange={onChangeInput}
        options={options}
      />
    </div>
  );
}

export default App;
