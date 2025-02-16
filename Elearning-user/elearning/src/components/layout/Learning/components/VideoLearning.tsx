import React from "react";

const VideoLearning: React.FC = () => {
  return (
    <div className="w-full ">
      {/* Video */}
<div className="w-full h-[calc(100vh-80px)] flex justify-center items-center p-4">
  <iframe
    className="w-full h-full border-8 border-gray-300 rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/aXqwQ_ZjY2A"
    title="Video bài học"
    allowFullScreen
  ></iframe>
</div>



      {/* Nội dung bên phải video */}
<div className="p-4 overflow-auto">
  <h1 className="text-2xl font-bold text-left">Xây dựng UI phần Header #1</h1>
  <p className="text-gray-500 text-sm text-left">Cập nhật tháng 5 năm 2022</p>

  <h2 className="text-xl font-semibold mt-4 text-left">Font deps</h2>
  <pre className="bg-blue-50 p-3 rounded-md text-sm overflow-auto text-left">
    {`"@fortawesome/fontawesome-svg-core": "^1.3.0",
        "@fortawesome/free-brands-svg-icons": "^6.0.0",
        "@fortawesome/free-regular-svg-icons": "^6.0.0",
        "@fortawesome/free-solid-svg-icons": "^6.0.0",
        "@fortawesome/react-fontawesome": "^0.1.17"`}
</pre>

  <p className="mt-3 text-left">
    👉 Bạn nào muốn bỏ qua phần làm HTML, CSS thì có thể tham khảo source code ở đây:
    <a href="https://github.com/sondnpt00343/tiktok-ui/commits/main" className="text-blue-600"> GitHub Repository</a>
  </p>

  <h2 className="text-xl font-semibold mt-4 text-left">Tham gia nhóm ReactJS Việt Nam</h2>
  <p className="text-left">
    Nhóm ReactJS - Việt Nam trước đây đã bị chiếm hữu và có nhiều tin bán hàng. Nay F8 tạo nhóm mới,
    hy vọng môi trường tốt hơn cho việc chia sẻ kiến thức.
  </p>
  <p className="mt-2 font-bold text-left">
    👉 <a href="https://www.facebook.com/groups/1134618593772787" className="text-red-600">Tham gia nhóm tại đây</a>
  </p>
</div>

    </div>
  );
};

export default VideoLearning;
