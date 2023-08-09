import { useState, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
// cái nào export default : thì ko càn dấu { }
// cái nào export thườn : thì phải có { }
import config from '~/config/routes';
import SuggesteAcount from '~/conponents/SuggestedAccounts/SuggesteAcount';

import * as userServices from '~/Services/userServices';
import * as followingServices from '~/Services/followingServices';

import {
    HomeIcon,
    HomeActiveIcon,
    Groupicon,
    GroupActiveicon,
    Liveicon,
    LiveActiveicon,
} from '~/conponents/Icons/Icon';

const cx = className.bind(styles);

function Sidebar() {
    const PER_PAGE = 5;

    // goi API cho suggetuser
    const [suggesteUsers, setsuggesteUsers] = useState([]);
    useEffect(() => {
        userServices //thanh promise
            .getsuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setsuggesteUsers((preuser) => [...preuser, ...data]); // giai du lieu cu vaf dl moi de nhan dc dl cuoi cung . moi lan no setstate thi bao luu cai cu va day them cai moi vao
            })
            .catch((error) => console.log(error));
    }, []);

    // goi API cho following account
    const [followinguser, setfollowinguser] = useState([]);
    useEffect(() => {
        followingServices
            .getfollowing({ page: 1 })
            .then((data) => {
                setfollowinguser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        // aside la the html
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.home} icon={<HomeIcon />} activeicon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.folowing}
                    icon={<Groupicon />}
                    activeicon={<GroupActiveicon />}
                />
                <MenuItem title="live" to={config.live} icon={<Liveicon />} activeicon={<LiveActiveicon />} />
            </Menu>
            <SuggesteAcount lable="Suggested accounts" data={suggesteUsers} />
            <SuggesteAcount lable="Following accounts" data={followinguser} />
        </aside>
    );
}
export default Sidebar;
