import * as httprequest from '~/utils/httprequest'; // nạp tất cả những cái export ỏ bên repuest.js

export const getfollowing = async ({ page }) => {
    try {
        const res = await httprequest.lay('me/followings', {
            // cái này sẽ dc nối vào sau phần baseURL để nối đén API đích
            params: {
                page, //trang
            },
        }); // gọi API cho du an .
        return res.data;
    } catch (error) {
        // cái nay nó giông .catch
        console.log(error);
    }
};
