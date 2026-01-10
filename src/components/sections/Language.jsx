import React from "react";
import { languages } from "../../constants";
import { FaEarthAfrica } from "react-icons/fa6";

const Language = () => {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-2xl">
          <FaEarthAfrica />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Langues</h3>
          <p className="text-sm text-gray-500">Compétences linguistiques</p>
        </div>
      </div>

      <div className="space-y-4">
        {languages.map((lang, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900">{lang.name}</p>
                  <p className="text-sm text-gray-500">{lang.level}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {lang.proficiency}%
              </span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${lang.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
