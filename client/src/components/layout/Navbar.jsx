import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import menuData from "../../shared/MenuData";

// Hàm chuyển đổi tiếng Việt thành slug
function convertToSlug(text) {
    const slug = text
      .toLowerCase()
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
      .replace(/ì|í|ị|ỉ|ĩ/g, "i")
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9-]+/g, "-") // Replace non-alphanumeric with -
      .replace(/^-+|-+$/g, "") // Remove leading/trailing -
      .replace(/-+/g, "-"); // Collapse multiple -
    return slug;
  }

const DropdownMenu = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Hàm này kiểm tra xem một mục con có active không
  const isChildActive = (parentPath, childValue) => {
    const searchParams = new URLSearchParams(location.search);
    const childParamValue = searchParams.get("value");
    return location.pathname.startsWith(parentPath) && childParamValue === childValue;
  };

  const getMenuPath = (title) => {
    return `/get-movie/${convertToSlug(title)}`;
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`${location.pathname === getMenuPath(title) || open ? 'text-blue-400' : 'hover:text-blue-400'} px-4 py-2`}>{title}</button>
      {open && (
        <div className="absolute left-0 transform -translate-x-1/2 top-full w-[600px] bg-slate-800/90 backdrop-blur-md text-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded shadow-xl z-50  ">
          {items.map((item, idx) => {
            const value = typeof item === 'object' ? item.value : item;
            const itemPath = `${getMenuPath(title)}?value=${convertToSlug(value)}`;
            const isActive = isChildActive(getMenuPath(title), value);
            return (
              <Link
                key={idx}
                to={itemPath}
                className={isActive ? "text-blue-400" : "hover:text-blue-400"}
                onClick={() => {
                  if (title === "Năm") {
                    navigate(itemPath);
                  }
                }}
              >
                {typeof item === 'object' ? item.label : item}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();

    const isParentActive = (parentPath) => {
        const basePaths = ["/get-movie/phim-bo", "/get-movie/phim-le", "/get-movie/tv-shows", "/get-movie/hoat-hinh"];
        if (basePaths.includes(parentPath)) {
            return location.pathname === parentPath;
        }
        const searchParams = new URLSearchParams(location.search);
        const hasValueParam = searchParams.has("value");
        return location.pathname.startsWith(parentPath) && !hasValueParam;
    };
    

    const getMenuPath = (title) => {
        return `/get-movie/${convertToSlug(title)}`;
    }

  return (
    <nav className="sticky top-0 z-50 flex gap-6 px-6 py-3 text-white bg-gradient-to-r from-slate-900 to-slate-800">
      <Link
        to="/get-movie/phim-bo"
        className={isParentActive("/get-movie/phim-bo") ? "text-blue-400 px-4 py-2" : "hover:text-blue-400 px-4 py-2"}
      >
        Phim Bộ
      </Link>
      <Link
        to="/get-movie/phim-le"
        className={isParentActive("/get-movie/phim-le") ? "text-blue-400 px-4 py-2" : "hover:text-blue-400 px-4 py-2"}
      >
        Phim Lẻ
      </Link>
      <Link
        to="/get-movie/tv-shows"
        className={isParentActive("/get-movie/tv-shows") ? "text-blue-400 px-4 py-2" : "hover:text-blue-400 px-4 py-2"}
      >
        TV Shows
      </Link>
      <Link
        to="/get-movie/hoat-hinh"
        className={isParentActive("/get-movie/hoat-hinh") ? "text-blue-400 px-4 py-2" : "hover:text-blue-400 px-4 py-2"}
      >
        Hoạt Hình
      </Link>

      <DropdownMenu
        title="Thể Loại"
        items={menuData["Thể Loại"]}
      />
      <DropdownMenu
        title="Quốc Gia"
        items={menuData["Quốc Gia"]}
      />
      <DropdownMenu
        title="Năm"
        items={menuData["Năm"]}
      />
    </nav>
  );
};

export default Navbar;
