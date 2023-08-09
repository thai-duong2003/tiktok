import routesconfig from '~/config/routes';

import { HeaderOnly } from '~/Layout';

import Home from '~/page/Home/Home';
import Folowing from '~/page/Folowing/Folowing';
import Profile from '~/page/Profile/Profile';
import Upload from '~/page/Upload/Upload';
import Search from '~/page/Search/Search';
import Live from '~/page/Live/Live';
//public route
const publicroutes = [
    { path: routesconfig.home, component: Home },
    { path: routesconfig.folowing, component: Folowing },
    { path: routesconfig.profile, component: Profile },
    // /@ : cai cố định
    // nickname : la cái path nó thay đổi
    // viết như thế để khi đường link mà có cái /@ thì mặc định là dẫn đến trang Profile
    { path: routesconfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesconfig.search, component: Search, layout: null },
    { path: routesconfig.live, component: Live },
];
const privateroute = [];
export { publicroutes, privateroute };
