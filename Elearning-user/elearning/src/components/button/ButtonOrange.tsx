import React from 'react';

interface ButtonProps {
  text: string;
}

const ButtonOrange: React.FC<ButtonProps> = ({ text }) => {
  return (
<button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-sm py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
  {text}
</button>

  );
};

export default ButtonOrange;
