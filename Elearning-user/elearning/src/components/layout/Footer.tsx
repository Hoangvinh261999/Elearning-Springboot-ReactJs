import React from 'react';

const Footer: React.FC=()=>{

    return(
         <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        {/* Cột 1: Liên hệ với chúng tôi */}
        <div>
            <h2 className="text-xl font-bold mb-2">Liên hệ với chúng tôi</h2>
            <p className="text-lg">Hotline: <text className='text-red-400 font-bold'>0559202989 (DEV VINH)</text></p>
        </div>
        
        {/* Cột 2: Về chúng tôi */}
        <div>
            <h2 className="text-xl font-bold mb-2">Về chúng tôi</h2>
            <ul className="space-y-1 text-sm">
                <li><a href="/" className="hover:underline">Giới thiệu</a></li>
                <li><a href="/" className="hover:underline">Đội ngũ</a></li>
                <li><a href="/" className="hover:underline">Câu hỏi thường gặp</a></li>
            </ul>
        </div>
        
        {/* Cột 3: Khóa học */}
        <div>
            <h2 className="text-xl font-bold mb-2">Khóa học</h2>
            <ul className="space-y-1 text-sm">
                <li><a href="/" className="hover:underline">Khóa học phổ biến</a></li>
                <li><a href="/" className="hover:underline">Khóa học miễn phí</a></li>
                <li><a href="/" className="hover:underline">Lộ trình học</a></li>
            </ul>
        </div>
        
        {/* Cột 4: Kết nối */}
        <div>
            <h2 className="text-xl font-bold mb-2">Kết nối</h2>
            <div className=" flex flex-col">
                <a href="/" className="text-blue-500 hover:text-blue-700">Facebook</a>
                <a href="/" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="/" className="text-pink-500 hover:text-pink-700">Instagram</a>
                <a href="/" className="text-sky-300 hover:text-gray-600">LinkedIn</a>
            </div>
        </div>
        
        {/* Cột 5: Chính sách & Điều khoản */}
        <div>
            <h2 className="text-xl font-bold mb-2">Chính sách & Điều khoản</h2>
            <ul className="space-y-1 text-sm">
                <li><a href="/" className="hover:underline">Chính sách bảo mật</a></li>
                <li><a href="/" className="hover:underline">Điều khoản sử dụng</a></li>
                <li><a href="/" className="hover:underline">Chính sách hoàn tiền</a></li>
            </ul>
        </div>
    </div>

    {/* Phần quyền sở hữu */}
    <div className="text-center mt-8 text-xs text-gray-400">
        <p>&copy; 2024 Công ty Vin-Edu. Mọi quyền được bảo lưu.</p>
    </div>
</footer>

    );
}

export default Footer;  
