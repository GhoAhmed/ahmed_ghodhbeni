import { stats } from "../../constants";

const Stats = () => {
  return (
    <section className="container-app">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card text-center hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-2">
              <stat.icon className={`text-${stat.iconColor}`} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
