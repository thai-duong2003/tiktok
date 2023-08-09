// làm cái này để khi gọi API ở những chỗ khác thì ko cần dùng đến cái chuỗi http nũa
//mà chỉ cần nối trực tiếp mục càn đến

import axios from 'axios'; // nạp thư vien axios  dung đẻ gọi API
const httprequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const lay = async (apipath, options = {}) => {
    const response = await httprequest.get(apipath, options); //wait : đợi có nghĩa là nó phải chờ cái này làm xong thì mới chạy đén cái dưới
    return response.data;
};

export default httprequest;
