import React from "react";
import HeaderBar from "./components/HeaderBar";
import FooterLearning from "./components/Footer";
import ListCourse from "./components/ListPartCourse";
import VideoLearning from "./components/VideoLearning";

const LearningPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <HeaderBar />
      
      {/* Nội dung chính */}
      <div className="flex flex-1 overflow-hidden">
        {/* Phần bên trái */}
        <div className="w-4/5 overflow-auto">
          <VideoLearning/>
        </div>

        {/* Phần danh sách khóa học */}
        <div className="w-1/5 overflow-auto">
          <ListCourse />
        </div>
      </div>

      {/* Footer */}
      <FooterLearning />
    </div>
  );
};

export default LearningPage;
