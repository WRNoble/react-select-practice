import React from "react";
import Select from "react-select";

function CustomSelect({ props, label, options, onChange }) {
  return (
    <div>
      <h2>{label}</h2>
      <Select options={options} onChange={onChange} />
    </div>
  );
}

export default CustomSelect;
