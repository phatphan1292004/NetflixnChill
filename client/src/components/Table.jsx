import React, { useState } from 'react';





const movieData = [
    {
        id: '1',
        title: 'Sư Huynh Của Ta Quá Mạnh',
        year: '2025',
        status: 'Tập 9',
        format: 'Hoạt Hình',
        country: 'Trung Quốc',
        updatedAt: '2025-04-13T18:57:27.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTdiNzYxNjAtZTZhOC00ZDIzLWE1YjMtZDBhYjYyN2QzN2YxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
    },
    {
        id: '2',
        title: 'Lazarus',
        year: '2025',
        status: 'Tập 2',
        format: 'Hoạt Hình',
        country: 'Nhật Bản',
        updatedAt: '2025-04-13T18:20:28.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzY3ZDNjM2YtNzZkZS00ZGEyLWEyYjMtMTM0ZDk2MWMwZDJhXkEyXkFqcGdeQXVyMTM0NTM2NzY@._V1_.jpg',
    },
    {
        id: '3',
        title: 'YAIBA: Huyền Thoại Samurai',
        year: '2025',
        status: 'Tập 2',
        format: 'Hoạt Hình',
        country: 'Nhật Bản',
        updatedAt: '2025-04-13T16:57:49.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWEyZTUxMGEtMmQyMC00N2Y0LTkwYjUtM2M2ZDA4ODk1ZWYwXkEyXkFqcGdeQXVyNzkyNjM3ODk@._V1_.jpg',
    },
    {
        id: '4',
        title: 'Vô Luyện Đỉnh Phong 3D',
        year: '2024',
        status: 'Tập 46',
        format: 'Hoạt Hình',
        country: 'Trung Quốc',
        updatedAt: '2025-04-13T16:56:16.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzJjMThiMjYtZDJhMy00ZDIzLTk0ZjMtZDJlZGUxZjMzMTc3XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
    },
    {
        id: '5',
        title: 'Cuộc Sống Mới Trong Bóng Tối Của Trị Liệu Sư Tài Ba',
        year: '2025',
        status: 'Tập 2',
        format: 'Hoạt Hình',
        country: 'Nhật Bản',
        updatedAt: '2025-04-13T16:45:42.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2YjU4MzMtZWYxMC00Mjk4LThjMTMtZWIzZTIyOWU0ZDJkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
    },
    {
        id: '6',
        title: 'Đô Thị Cổ Tiên Y',
        year: '2024',
        status: 'Tập 61',
        format: 'Hoạt Hình',
        country: 'Trung Quốc',
        updatedAt: '2025-04-13T16:45:12.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWU1ZGY1NDMtZDMwMy00M2M2LTkzZjItY2EwZTEwZDBhYjYwXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
    },
    {
        id: '7',
        title: 'Thần Vực Vô Tận',
        year: '2024',
        status: 'Tập 72',
        format: 'Hoạt Hình',
        country: 'Trung Quốc',
        updatedAt: '2025-04-13T16:44:36.000Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjMzZGEtZWRiNi00MzYxLThlYjMtZDBhZTM0N2Q5ZTUxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
    },
];

const Table = () => {
    const [movies, setMovies] = useState(movieData);

    const [thoiGian, setThoiGian] = useState('');
    const [ngonNgu, setNgonNgu] = useState('');
    const [theLoai, setTheLoai] = useState('');
    const [quocGia, setQuocGia] = useState('');
    const [nam, setNam] = useState('');
    const pageNumbers = [];
    for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
    }
    const handleFilter = () => {
        let filteredMovies = [...movieData];

        if (thoiGian) {
            filteredMovies = filteredMovies.filter(movie =>
                thoiGian === 'Thời gian đăng' ? true :
                thoiGian === 'Năm sản xuất' ? true : false
            );
        }
        if (ngonNgu) {
            filteredMovies = filteredMovies.filter(movie =>
                ngonNgu === 'Toàn bộ' ? true :
                ngonNgu === 'Tiếng Việt' ? true :
                ngonNgu === 'Tiếng Anh' ? true :
                ngonNgu === 'Tiếng Trung' ? true :
                ngonNgu === 'Phim Vietsub' ? true :
                ngonNgu === 'Phim Thuyết Minh' ? true :
                ngonNgu === 'Phim Lồng Tiếng' ? true : false
            );
        }
        if (theLoai) {
            filteredMovies = filteredMovies.filter(movie =>
                theLoai === 'Toàn bộ' ? true :
                theLoai === 'Hành động' ? true :
                theLoai === 'Phiêu lưu' ? true :
                theLoai === 'Hài hước' ? true :
                theLoai === 'Tình cảm' ? true :
                theLoai === 'Gia đình' ? true :
                theLoai === 'Khoa học viễn tưởng' ? true :
                theLoai === 'Kinh dị' ? true :
                theLoai === 'Thể thao' ? true :
                theLoai === 'Âm nhạc' ? true :
                theLoai === 'Lịch sử' ? true :
                theLoai === 'Tài liệu' ? true : false
            );
        }
        if (quocGia) {
          filteredMovies = filteredMovies.filter((movie) =>
            quocGia === "Toàn bộ"
              ? true
              : quocGia === "Việt Nam"
              ? movie.country === "Việt Nam"
              : quocGia === "Trung Quốc"
              ? movie.country === "Trung Quốc"
              : quocGia === "Nhật Bản"
              ? movie.country === "Nhật Bản"
              : quocGia === "Hàn Quốc"
              ? movie.country === "Hàn Quốc"
              : quocGia === "Mỹ"
              ? movie.country === "Mỹ"
              : quocGia === "Anh"
              ? movie.country === "Anh"
              : quocGia === "Pháp"
              ? movie.country === "Pháp"
              : quocGia === "Thái Lan"
              ? movie.country === "Thái Lan"
              : quocGia === "Ấn Độ"
              ? movie.country === "Ấn Độ"
              : quocGia === "Canada"
              ? movie.country === "Canada"
              : quocGia === "Úc"
              ? movie.country === "Úc"
              : false
          );
        }
        if (nam) {
            filteredMovies = filteredMovies.filter(movie =>
                nam === 'Toàn bộ' ? true : movie.year === nam
            );
        }

        setMovies(filteredMovies);
    };

    return (
        <div className="min-h-screen py-8 mt-8 text-white bg-gray-900">
      

            <main className="container px-4 py-8 mx-auto">
                <div className="overflow-hidden bg-gray-800 rounded-lg shadow-md">
                    <div className="px-6 py-4">
                        <h2 className="mb-4 text-xl font-semibold">Lọc Phim</h2>
                        <div className="grid grid-cols-1 gap-4 p-4 bg-gray-800 rounded-lg md:grid-cols-6">
    {/* Thời gian cập nhật */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Thời gian</label>
        <select 
            onChange={(e) => setThoiGian(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Tất cả</option>
            <option value="Thời gian cập nhật">Theo cập nhật</option>
            <option value="Thời gian đăng">Theo đăng tải</option>
            <option value="Năm sản xuất">Theo năm SX</option>
        </select>
    </div>

    {/* Ngôn ngữ */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Ngôn ngữ</label>
        <select 
            onChange={(e) => setNgonNgu(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Tất cả</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
            <option value="Tiếng Anh">Tiếng Anh</option>
            <option value="Tiếng Trung">Tiếng Trung</option>
            <option value="Phim Vietsub">Vietsub</option>
            <option value="Phim Thuyết Minh">Thuyết minh</option>
            <option value="Phim Lồng Tiếng">Lồng tiếng</option>
        </select>
    </div>

    {/* Thể loại */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Thể loại</label>
        <select 
            onChange={(e) => setTheLoai(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Tất cả</option>
            <option value="Hành động">Hành động</option>
            <option value="Phiêu lưu">Phiêu lưu</option>
            <option value="Hài hước">Hài hước</option>
            <option value="Kinh dị">Kinh dị</option>
            <option value="Khoa học viễn tưởng">Sci-fi</option>
        </select>
    </div>

    {/* Quốc gia */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Quốc gia</label>
        <select 
            onChange={(e) => setQuocGia(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Tất cả</option>
            <option value="Việt Nam">Việt Nam</option>
            <option value="Trung Quốc">Trung Quốc</option>
            <option value="Nhật Bản">Nhật Bản</option>
            <option value="Hàn Quốc">Hàn Quốc</option>
            <option value="Mỹ">Mỹ</option>
        </select>
    </div>

    {/* Năm */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Năm</label>
        <select 
            onChange={(e) => setNam(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="">Tất cả</option>
            {[...Array(10)].map((_, i) => {
                const year = new Date().getFullYear() - i;
                return <option key={year} value={year}>{year}</option>
            })}
        </select>
    </div>

    {/* Nút lọc */}
    <div className="flex items-end">
        <button
            onClick={handleFilter}
            className="w-full px-4 py-2 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-md shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Áp dụng
        </button>
    </div>
</div>
                    </div>
                </div>

                <div className="mt-8 overflow-hidden bg-gray-800 rounded-lg shadow-md">
                    <table className="min-w-full divide-y divide-gray-600">
                        <thead className="bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Hình ảnh
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Tên
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Năm
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Tình trạng
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Định dạng
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Quốc gia
                                </th>
                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                    Ngày cập nhật
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-600">
                            {movies.map((movie) => (
                                <tr key={movie.id}>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-20 h-auto mr-4 rounded-md" // Kích thước và kiểu dáng
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                        {movie.title}
                                        <span className="block text-gray-400">{movie.title}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.year}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.status}</td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">{movie.format}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.country}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.updatedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Phần phân trang */}
                <div className="flex items-center justify-center mt-6 space-x-2">
                <button
                   
                   
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors `}
                >
                    ← Previous
                </button>
                
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`px-4 py-2 min-w-[40px] text-sm font-medium rounded-md transition-colors `}
                    >
                        {number}
                    </button>
                ))}
                
                <button
                   
                  
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors `}
                >
                    Next →
                </button>
            </div>


                {/* Thông tin bản quyền */}
                <div className="mt-8 text-sm text-center text-gray-400">
                    <p>
                        Tất cả nội dung trên trang web này đều được thu thập từ các trang web video chính thống trên Internet và chúng tôi không cung cấp dịch vụ phát trực tuyến chính hãng.
                        Nếu quyền lợi của bạn bị xâm phạm, vui lòng thông báo cho chúng tôi, chúng tôi sẽ kịp thời xóa bỏ nội dung vi phạm. Cảm ơn sự hợp tác của bạn.
                    </p>
                    <p className="mt-2">
                        Copyright © {new Date().getFullYear()} Giới thiệu | Khiếu nại bản quyền | API | Việt Sub | Xem Phim
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Table;

