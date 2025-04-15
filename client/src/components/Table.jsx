import React, { useEffect, useState } from 'react';
import { data, useLocation, useParams, useSearchParams } from 'react-router-dom';
import getEndpoint from '../shared/getEndpoint';

import menuData from '../shared/MenuData';
import specialSearch from '../shared/SpecialSearch';
import createAxiosInstance from '../axios/axiosInterceptor';
import { Pagination } from 'antd';
import { BASE_URL } from '../shared/CommonURL';
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

const itemRender= (_, type, originalElement) => {
    if (type === 'prev') {
      return <a className='text-slate-300'>Previous</a>;
    }
    if (type === 'next') {
      return <a className='text-slate-300'>Next</a>;
    }
    return originalElement;
  };
const Table = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    
    const { type } = useParams();
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(8);
    const [sortField,setSortField] = useState("");
    const [key,setKey] = useState("");
    const [typeList,setTypeList] = useState("");
    const [sortType,setSortType] = useState("desc");
    const [sortLang,setSortLang] = useState("");
    const [country,setCountry] = useState("");
    const [year,setYear] = useState("");
    const [totalPage,setTotalPage] = useState(0);
    const [totalItem,setTotalItem] = useState(0);

    
    const [movies, setMovies] = useState(movieData);


    const pageNumbers = [];
    for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
    }

    useEffect(()=>{
        if(specialSearch.includes(type)){
            setKey("danh-sach");
            setTypeList(type);
        }
        if(searchParams.get("value")){
            
            setKey(type);
            setTypeList(searchParams.get("value"));
            if(type === "nam"){
                setYear(searchParams.get("value"));
            }
            if(type === "quoc-gia"){
                setCountry(searchParams.get("value"));
            }
            
        }

       
       
      

    }, [type,searchParams]);
    useEffect(()=>{
        const getMovies = async () => {
            const phimapi = createAxiosInstance(BASE_URL);
            const endpoint = getEndpoint({
                key,
                type_list: typeList,
                page,
                sort_field: sortField,
                sort_type: sortType,
                sort_lang: sortLang,
                country,
                year,
                limit,
            });
            console.log(endpoint);
            const data = await phimapi.get(endpoint);
            if(data.status === "success"){
                setTotalItem(data.data.params.pagination.totalItems);
                setTotalPage(data.data.params.pagination.totalPages);
                setMovies(data.data.items);
            }
        };
        getMovies()
    },[key,typeList,page,limit])
    
    
    
 
    const handleLoadMovie = ()=>{
        const getMovies = async () => {
            const phimapi = createAxiosInstance(BASE_URL);
            const endpoint = getEndpoint({
                key,
                type_list: typeList,
                page,
                sort_field: sortField,
                sort_type: sortType,
                sort_lang: sortLang,
                country,
                year,
                limit,
            });
            console.log(endpoint);
            const data = await phimapi.get(endpoint);
            if(data.status === "success"){
                console.log(data);
                setTotalItem(data.data.params.pagination.totalItems);
                setTotalPage(data.data.params.pagination.totalPages);
                setMovies(data.data.items);
            }
        };
        getMovies()
    }
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
            onChange={(e) => setSortField(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="" defaultChecked>Tất cả</option>
            <option value="modified.time">Theo cập nhật</option>
            <option value="_id">Theo ID của phim</option>
            <option value="year">Theo năm SX</option>
        </select>
    </div>

    {/* Ngôn ngữ */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Ngôn ngữ</label>
        <select 
            onChange={(e) => setSortLang(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="" defaultChecked>Tất cả</option>
            <option value="vietsub">Vietsub</option>
            <option value="thuyet-minh">Thuyết minh</option>
            <option value="long-tieng">Lồng tiếng</option>
        </select>
    </div>

    {/* Thể loại */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Thể loại</label>
        <select 
            disabled={type === "the-loai"}
            onChange={(e) => setTypeList(e.target.value)}
            value={typeList}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="" defaultChecked>Tất cả</option>
            {
                menuData["Thể Loại"].map((item, index) => (
                    <option key={index} value={item.value} >{item.label}</option>
                ))
            }
        </select>
    </div>

    {/* Quốc gia */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Quốc gia</label>
        <select 
            disabled={type === "quoc-gia"}
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="" defaultChecked>Tất cả</option>
            {
                menuData["Quốc Gia"].map((item, index) => (
                    <option key={index} value={item.value} >{item.label}</option>
                ))
            }
        </select>
    </div>

    {/* Năm */}
    <div className="space-y-1">
        <label className="block mb-1 text-sm font-medium text-gray-100">Năm</label>
        <select 
            disabled={type === "nam"}
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="w-full px-3 py-2 text-sm text-gray-100 transition-colors bg-gray-700 border border-gray-600 rounded-md cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            <option value="" defaultChecked>Tất cả</option>
            {
                menuData["Năm"].map((item, index) => (
                    <option key={index} value={item} >{item}</option>
                ))
            }
        </select>
    </div>

    {/* Nút lọc */}
    <div className="flex items-end">
        <button
            onClick={handleLoadMovie}
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
                            {movies && movies.length > 0 && movies.map((movie) => (
                                <tr key={movie.id}>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <img
                                            src={movie.thumb_url?.includes("https://img.phimapi.com/")
                                ? movie.thumb_url
                                : `https://img.phimapi.com/${movie.thumb_url}`
                        }
                                            alt={movie.name}
                                            className="w-20 h-auto mr-4 rounded-md" // Kích thước và kiểu dáng
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                        {movie.name}
                                        <span className="block text-gray-400">{movie.origin_name
                                        }</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.year}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <p className='inline-block p-1 px-2 text-center text-green-400 rounded-full bg-slate-900'>{movie.episode_current
                                        }</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">{movie.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{Array.isArray(movie.country)
    ? movie.country.map((item, index) => (
        <span key={index}>
          {item.name}
          {index < movie.country.length - 1 ? ", " : ""}
        </span>
      ))
    : movie.country || "Không rõ"}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">{movie.modified?.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Phần phân trang */}
                
            <Pagination
                className="flex items-center justify-center gap-2 mx-auto mt-8 select-none text-slate-300"
                current={page}
                pageSize={limit} // Controlled, không dùng defaultPageSize nữa
                onChange={(newPage, newPageSize) => {
                if (newPageSize !== limit) {
                setLimit(newPageSize);
                setPage(1); // reset về trang 1 nếu đổi size
                } else {
                setPage(newPage);
                }
                }}
                showSizeChanger
                total={totalItem}
                itemRender={itemRender}
                pageSizeOptions={[8, 16, 32, 64]}
                />


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

