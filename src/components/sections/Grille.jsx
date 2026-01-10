import { highlights } from "../../constants";

const Grille = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
      {highlights.map((item, idx) => (
        <div key={idx} className="text-center space-y-2">
          {/* Icon container */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-3xl text-indigo-600">
              <item.icon />
            </div>
          </div>

          <div className="text-sm text-gray-500">{item.label}</div>
          <div className="font-semibold text-gray-900">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Grille;
