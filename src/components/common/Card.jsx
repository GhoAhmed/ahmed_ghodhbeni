const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-transform hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
