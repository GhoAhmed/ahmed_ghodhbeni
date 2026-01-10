const CourseContent = ({ chapters }) => {
  return (
    <div className="space-y-6">
      {chapters.map((chapter, index) => (
        <div key={chapter.id} className="card">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-white font-bold flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {chapter.title}
              </h3>
              <div className="prose prose-blue max-w-none space-y-3">
                {chapter.content.map((block, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {block.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;