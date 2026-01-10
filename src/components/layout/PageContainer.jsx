const PageContainer = ({ children, className = "" }) => {
  return (
    <div className={`container-app mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
