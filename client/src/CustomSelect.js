import React from "react";
import Select from "react-select";

const options = [
  { label: "react", value: "react" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "js" },
];

function CustomSelect(props) {
  return (
    <div>
      <Select option={options} />
    </div>
  );
}

export default CustomSelect;
