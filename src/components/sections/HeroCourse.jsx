const HeroCourse = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-50">
          Catalogue de Cours
        </h1>
        <p className="text-lg md:text-xl text-blue-100">
          Explorez mes cours interactifs et développez vos compétences en
          informatique
        </p>
      </div>
    </section>
  );
};

export default HeroCourse;
