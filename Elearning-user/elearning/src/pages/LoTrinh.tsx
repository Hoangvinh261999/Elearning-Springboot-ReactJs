import React from "react";

interface LearningStage {
  stage: string;
  description: string;
  icon: string; // URL or emoji/icon class
}

const learningStages: LearningStage[] = [
  {
    stage: "Giai đoạn 1: Học cơ bản",
    description: "Học về cú pháp cơ bản, cấu trúc dữ liệu và thuật toán.",
    icon: "📚",
  },
  {
    stage: "Giai đoạn 2: Học Frontend",
    description:
      "Tìm hiểu HTML, CSS, JavaScript, và các thư viện/framework như React.",
    icon: "💻",
  },
  {
    stage: "Giai đoạn 3: Học Backend",
    description:
      "Học về server-side với Node.js, Java Spring Boot, hoặc Python Django.",
    icon: "🔧",
  },
  {
    stage: "Giai đoạn 4: Xây dựng dự án thực tế",
    description:
      "Áp dụng kiến thức đã học để xây dựng các dự án từ nhỏ đến lớn.",
    icon: "🚀",
  },
  {
    stage: "Giai đoạn 5: Chuẩn bị đi làm",
    description:
      "Học về DevOps, kỹ năng phỏng vấn và hoàn thiện portfolio của bạn.",
    icon: "🎯",
  },
];

const LearningPath: React.FC = () => {
  return (
    <div>
      
            <h1 className="text-4xl font-bold text-teal-600 mb-16 z">
        Lộ trình học lập trình
      </h1>
    <div className="relative  py-20 overflow-hidden">

      {/* Đường dẫn lộ trình */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"></div>



      <div className="relative space-y-16 max-w-5xl mx-auto px-6">
        {learningStages.map((stage, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
          >
            {/* Chấm mốc */}
            <div className="absolute w-8 h-8 bg-teal-500 rounded-full border-4 border-white z-10"></div>

            {/* Nối giữa các mốc */}
            {index !== learningStages.length - 1 && (
              <div className="absolute left-4 top-full w-1 h-32 bg-teal-500"></div>
            )}

            {/* Nội dung */}
            <div
              className={`bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6 transform transition-all hover:scale-105 hover:shadow-xl duration-300 ${
                index % 2 === 0 ? "ml-10" : "mr-10"
              }`}
            >
              <div className="text-5xl">{stage.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-teal-700">
                  {stage.stage}
                </h2>
                <p className="text-gray-600 mt-2">{stage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LearningPath;
