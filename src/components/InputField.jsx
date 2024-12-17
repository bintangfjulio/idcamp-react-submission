import React from "react";

function InputField({ label, value, onChange }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        required
        type="text"
        value={value}
        onChange={onChange}
        className="input input-sm input-bordered w-full"
      />
    </label>
  );
}

export default InputField;
