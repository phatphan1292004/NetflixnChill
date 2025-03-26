import React from "react";

const Button = ({ className = "", onClick = () => {}, children }) => {
  return (
    <button
      className={`px-4 w-[170px] font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 shadow-lg hover:opacity-90 transitio ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
