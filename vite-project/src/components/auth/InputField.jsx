import React from "react";

const InputField = ({placeholder }) => {
  return (
    <div className="mt-4">
      <input className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"placeholder={placeholder}/>
    </div>
  );
};

export default InputField;
