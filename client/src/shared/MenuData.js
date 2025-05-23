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

export default menuData;