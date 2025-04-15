// Thông số kỹ thuật:
// - type_list = Thể loại phim cần lấy, sử dụng API phimapi.com/the-loai để lấy chi tiết slug.
// - page = Số trang cần truy xuất, sử dụng [totalPages] để biết tổng trang khả dụng.
// - sort_field = modified.time > tính theo thời gian cập nhật, _id > lấy theo ID của phim, year > lấy theo số năm phát hành của phim.
// - sort_type = desc hoặc asc.
// - sort_lang = vietsub > phim có Vietsub, thuyet-minh > phim có Thuyết Minh, long-tieng > phim có Lồng Tiếng.
// - country = Quốc gia phim cần lấy, sử dụng API phimapi.com/quoc-gia để lấy chi tiết slug.
// - year = Năm phát hành của phim (1970 - hiện tại).
// - limit = Giới hạn kết quả (tối đa 64).
// Key : the-loai, nam, quoc-gia, tim-kiem (keyword = "type_list").
const getEndpoint = (info )=>{
    // Lấy các thông tin khác rỗng 
    let { key, type_list,page, sort_field,sort_type,sort_lang,country,year,limit } = info;
    const params = {
      ...(key && { key }),
      ...(type_list && { type_list }),
      ...(page && { page }),
      ...(sort_field && { sort_field }),
      ...(sort_type && { sort_type }),
      ...(sort_lang && { sort_lang }),
      ...(country && { country }),
      ...(year && { year }),
      ...(limit && { limit }),
    };
    let newParams = getParams(params);
    const {key: keyParam,
        keyword,
       type_list: typeListParam, ...searchParams} = newParams;
    const UrlSearchParams = new URLSearchParams(searchParams).toString();
    if(key === "tim-kiem"){
      return "/tim-kiem"+"/"+keyword+"?"+UrlSearchParams;
    }else{
      console.log("/"+key+"/"+type_list+"?"+UrlSearchParams);
      return "/"+key+"/"+type_list+"?"+UrlSearchParams;
    }
    

    
}
const getParams = (params)=>{
  if(params.key === "the-loai") {
    const {category,...newParams} = params;
    return newParams;
  }
  if(params.key === "quoc-gia") {
    const {country,...newParams} = params;
    return newParams;
  }
  if(params.key === "nam") {
    const {year,...newParams} = params;
    return newParams;
  }
  if(params.key === "tim-kiem") {
    const {type_list,...newParams} = params;
    return {keyword: type_list,...newParams};
  }
 
  return params;
}

export default getEndpoint;