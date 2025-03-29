import React from "react";

const InputField = ({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm text-gray-300 block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 
    bg-gray-700/50 text-white rounded-md
    backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/20
    transition duration-200 placeholder-gray-400"
      />
    </div>
  );
};

export default InputField;
