const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors
        bg-blue-600 text-white hover:bg-blue-700
        disabled:bg-gray-400 disabled:cursor-not-allowed
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
