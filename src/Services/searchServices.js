import * as httprequest from '~/utils/httprequest'; // nạp tất cả những cái export ỏ bên repuest.js

export const search = async (q, type = 'less') => {
    try {
        // cái nay nó giông .then
        // wait : đợi có nghĩa là nó phải chờ cái này làm xong thì mới chạy đén cái dưới
        const res = await httprequest.lay('users/search', {
            // cái này sẽ dc nối vào sau phần baseURL để nối đén API đích
            params: {
                q, //cái nay là từ khóa tìm kiếm
                type, //cái này dcc cấu hình do back end thiết kế
            },
        }); // gọi API cho du an .
        return res.data;
    } catch (error) {
        // cái nay nó giông .catch
        // console.log(error);
    }
};
