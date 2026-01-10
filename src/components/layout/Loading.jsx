const Loading = () => {
  return (
    <div className="container-app py-16">
      <div className="card text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        <p className="text-gray-600">Chargement du cours...</p>
      </div>
    </div>
  );
};

export default Loading;
