import React from "react";

const ChiTietBaiViet = () => {
  const baiViet = {
    image: "https://gamakaai.com/wp-content/uploads/2019/06/java-banner-1-1024x332.png",
    tieuDe: "Sự Phát Triển Của Java Qua Các Thế Hệ",
    tacGia: "Nguyễn Văn A",
    ngayDang: "10/02/2025",
    mucLuc: [
      "Lịch sử ra đời của Java",
      "Các phiên bản Java và cải tiến",
      "Java trong thế giới công nghệ hiện nay",
      "Tương lai của Java",
    ],
    noiDung: [
      {
        tieuDe: "1. Lịch sử ra đời của Java",
        noiDung:
          "Java được phát triển bởi Sun Microsystems vào năm 1995 với mục tiêu tạo ra một ngôn ngữ lập trình có thể chạy trên nhiều nền tảng...",
      },
      {
        tieuDe: "2. Các phiên bản Java và cải tiến",
        noiDung:
          "Từ Java 1.0 đến Java 21, mỗi phiên bản đều mang đến nhiều cải tiến về hiệu suất, bảo mật và cú pháp...",
      },
      {
        tieuDe: "3. Java trong thế giới công nghệ hiện nay",
        noiDung:
          "Java vẫn giữ vững vị trí trong lĩnh vực lập trình web, ứng dụng di động (Android), và hệ thống tài chính...",
      },
      {
        tieuDe: "4. Tương lai của Java",
        noiDung:
          "Với sự phát triển của trí tuệ nhân tạo và điện toán đám mây, Java vẫn đang thích nghi và cập nhật để phù hợp với nhu cầu hiện đại...",
      },
    ],
    ketLuan:
      "Java đã trải qua hơn 25 năm phát triển và vẫn là một trong những ngôn ngữ lập trình phổ biến nhất...",
  };

  return (
   <div className="p-4 bg-white shadow-md rounded-lg overflow-y-auto text-left mb-2">
  {/* Hình ảnh tiêu đề */}
  <img
    src={baiViet.image}
    alt="Hình ảnh tiêu đề"
    className="w-full h-64 object-cover rounded-md"
  />

  {/* Tiêu đề và thông tin bài viết */}
  <span className="text-3xl font-bold mt-6 text-gray-900 block">
    {baiViet.tieuDe}
  </span>
  <p className="text-blue-500 font-bold text-sm mt-2 text-left">
    Đăng bởi <span className="font-semibold">{baiViet.tacGia}</span> - Ngày {baiViet.ngayDang}

  </p>
            <h2 className="text-lg font-semibold flex gap-2"><img src="/image/comment.png"alt="" className="h-6"/>12<img src="/image/heart.gif"alt="" className="h-6"/> 222</h2>

  {/* Mục lục */}
  <div className="bg-gray-100 p-4 mt-6 rounded-md text-left">
    <h2 className="text-lg font-semibold text-gray-800">Mục Lục</h2>
    <ul className="list-disc list-inside text-gray-700 text-sm mt-2 text-left">
      {baiViet.mucLuc.map((muc, index) => (
        <li key={index}>{muc}</li>
      ))}
    </ul>
  </div>

  {/* Nội dung bài viết */}
  <div className="mt-6 text-gray-800 space-y-6 text-left">
    {baiViet.noiDung.map((phan, index) => (
      <section key={index}>
        <h2 className="text-xl font-semibold text-left">{phan.tieuDe}</h2>
        <p className="mt-2  text-left">{phan.noiDung}</p>
      </section>
    ))}
  </div>

  {/* Kết luận */}
  <div className="bg-gray-100 p-4 mt-6 rounded-md text-left">
    <h2 className="text-lg font-semibold text-gray-800">Kết Luận</h2>
    <p className="text-gray-700  text-left">{baiViet.ketLuan}</p>
  </div>

  <div className="mt-6">
        <h2 className="text-lg font-semibold flex gap-2">Bình Luận <img src="/image/comment.png"alt="" className="h-6"/>12<img src="/image/heart.gif"alt="" className="h-6"/> 222</h2>
        <textarea
          className="w-full p-2 border rounded-md mt-2"
          placeholder="Nhập bình luận của bạn..."
        ></textarea>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Gửi bình luận
        </button>
      </div>
</div>

  );
};

export default ChiTietBaiViet;
