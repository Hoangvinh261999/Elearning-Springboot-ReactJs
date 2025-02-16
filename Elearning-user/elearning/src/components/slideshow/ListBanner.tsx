import meo from "../../assets/images/meo.png"
const ListBan=()=>{
const ListDiv=[
    <div className="relative w-full  bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 rounded-lg shadow-lg overflow-hidden">

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                Học Java Mọi Lúc, Mọi Nơi
                </h1>
                <p className="text-lg mb-6">
                Chương trình học Java chuyên sâu với kiến thức từ cơ bản đến nâng cao. Học trực tuyến với các bài giảng chất lượng, dễ hiểu.
                </p>
                <a
                href="#learn-more"
                className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                >
                Tìm Hiểu Thêm
                </a>
            </div>
        </div>,
        <div className="relative w-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-lg shadow-lg overflow-hidden">

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                Học Spring Framework
                </h1>
                <p className="text-lg mb-6">
                Spring là một framework mã nguồn mở, giúp xây dựng các ứng dụng Java mạnh mẽ và linh hoạt. Khám phá cách Spring có thể đơn giản hóa phát triển ứng dụng doanh nghiệp.
                </p>
                <a
                href="#learn-more"
                className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                >
                Tìm Hiểu Thêm
                </a>
            </div>
            </div>
        ,
                <div className="relative w-full bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 rounded-lg shadow-lg overflow-hidden">

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    Học Hibernate Framework
                    </h1>
                    <p className="text-lg mb-6">
                    Hibernate là một framework ORM mạnh mẽ giúp kết nối và làm việc với cơ sở dữ liệu trong các ứng dụng Java. Tìm hiểu cách Hibernate giúp tối ưu hóa việc thao tác với dữ liệu.
                    </p>
                    <a
                    href="#learn-more"
                    className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
                    >
                    Tìm Hiểu Thêm
                    </a>
                </div>
                </div>
        ,
<div className="relative w-full bg-gradient-to-r from-teal-500 via-green-400 to-yellow-500 rounded-lg shadow-lg overflow-hidden">

    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Học JavaFX Framework
        </h1>
        <p className="text-lg mb-6">
            JavaFX là một framework Java mạnh mẽ dùng để phát triển các ứng dụng desktop với giao diện người dùng hiện đại. Khám phá cách tạo ra các ứng dụng GUI đẹp mắt với JavaFX.
        </p>
        <a
            href="#learn-more"
            className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300"
        >
            Tìm Hiểu Thêm
        </a>
    </div>
</div>
,

]


return ListDiv;
}
export default ListBan;