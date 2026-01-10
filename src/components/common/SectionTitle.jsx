const SectionTitle = ({ title, subtitle = "", className = "" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
