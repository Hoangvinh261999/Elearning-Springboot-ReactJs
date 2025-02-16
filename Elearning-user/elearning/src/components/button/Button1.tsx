import React from 'react';

interface ButtonProps {
  text: string;
}

const Button1: React.FC<ButtonProps> = ({ text }) => {
  return (
<button className="bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-sm text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
  {text}
</button>


  );
};

export default Button1;
