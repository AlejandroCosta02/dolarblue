import React from "react";

interface RedButtonProps {
  onClick: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36"
      onClick={onClick}
    >
      Cambiar Dolar
    </button>
  );
};

export default RedButton;
