import * as httprequest from '~/utils/httprequest'; // nạp tất cả những cái export ỏ bên repuest.js

export const getsuggested = async ({ page, perPage }) => {
    try {
        const res = await httprequest.lay('users/suggested', {
            // cái này sẽ dc nối vào sau phần baseURL để nối đén API đích
            params: {
                page, //trang
                per_page: perPage, //per_page : viet giong nhu o postman , so luong account hien ra
            },
        }); // gọi API cho du an .
        return res.data;
    } catch (error) {
        // cái nay nó giông .catch
        console.log(error);
    }
};
