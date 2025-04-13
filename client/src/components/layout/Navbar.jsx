import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuData = {
  "Thể Loại": [
    { label: "Hành Động", value: "hanh-dong" },
    { label: "Cổ Trang", value: "co-trang" },
    { label: "Chiến Tranh", value: "chien-tranh" },
    { label: "Viễn Tưởng", value: "vien-tuong" },
    { label: "Kinh Dị", value: "kinh-di" },
    { label: "Tài Liệu", value: "tai-lieu" },
    { label: "Bí Ẩn", value: "bi-an" },
    { label: "Phim 18+", value: "phim-18" },
    { label: "Tình Cảm", value: "tinh-cam" },
    { label: "Tâm Lý", value: "tam-ly" },
    { label: "Thể Thao", value: "the-thao" },
    { label: "Phiêu Lưu", value: "phieu-luu" },
    { label: "Âm Nhạc", value: "am-nhac" },
    { label: "Gia Đình", value: "gia-dinh" },
    { label: "Học Đường", value: "hoc-duong" },
    { label: "Hài Hước", value: "hai-huoc" },
    { label: "Hình Sự", value: "hinh-su" },
    { label: "Võ Thuật", value: "vo-thuat" },
    { label: "Khoa Học", value: "khoa-hoc" },
    { label: "Thần Thoại", value: "than-thoai" },
    { label: "Chính Kịch", value: "chinh-kich" },
    { label: "Kinh Điển", value: "kinh-dien" }
  ],
  "Quốc Gia": [
    { label: "Trung Quốc", value: "trung-quoc" },
    { label: "Hàn Quốc", value: "han-quoc" },
    { label: "Việt Nam", value: "viet-nam" },
    { label: "Nhật Bản", value: "nhat-ban" },
    { label: "Thái Lan", value: "thai-lan" },
    { label: "Âu Mỹ", value: "au-my" },
    { label: "Anh", value: "anh" },
    { label: "Pháp", value: "phap" },
    { label: "Mexico", value: "mexico" },
    { label: "Canada", value: "canada" },
    { label: "Đức", value: "duc" },
    { label: "Ấn Độ", value: "an-do" },
    { label: "Ý", value: "y" },
    { label: "Nga", value: "nga" },
    { label: "Indonesia", value: "indonesia" },
    { label: "Philippines", value: "philippines" },
    { label: "Hong Kong", value: "hong-kong" },
    { label: "Thụy Điển", value: "thuy-dien" },
    { label: "Thụy Sĩ", value: "thuy-si" },
    { label: "Malaysia", value: "malaysia" },
    { label: "Châu Phi", value: "chau-phi" },
    { label: "UAE", value: "uae" },
    { label: "Tây Ban Nha", value: "tay-ban-nha" },
    { label: "Brazil", value: "brazil" },
    { label: "Đài Loan", value: "dai-loan" },
    { label: "Na Uy", value: "na-uy" },
    { label: "Ba Lan", value: "ba-lan" },
    { label: "Úc", value: "uc" },
    { label: "Ukraine", value: "ukraine" },
    { label: "Quốc Gia Khác", value: "quoc-gia-khac" }
  ],
  "Năm": Array.from({ length: 2026 - 2000 + 1 }, (_, i) => (2026 - i).toString())
};

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
