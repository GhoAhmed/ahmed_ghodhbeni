import { coursesStats } from "../../constants";

const CourseStats = () => {
  return (
    <section className="container-app">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {coursesStats.map((stat, idx) => (
          <div key={idx} className="card text-center space-y-2">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <stat.icon className={`w-6 h-6 text-${stat.iconColor}`} />
              </div>
            </div>

            {/* Value */}
            <div className="text-2xl md:text-3xl font-bold text-gradient">
              {stat.value}
            </div>

            {/* Label */}
            <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseStats;
