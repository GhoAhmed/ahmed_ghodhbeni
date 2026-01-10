import { coursesStats } from "../../constants";

const CourseStats = () => {
  return (
    <section className="container-app">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {coursesStats.map((stat, idx) => (
          <div key={idx} className="card text-center">
            <div className="text-3xl mb-2">
              <stat.icon className={`w-10 h-10 text-${stat.iconColor}`} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseStats;
