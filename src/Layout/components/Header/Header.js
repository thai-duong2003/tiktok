import classNames from 'classnames/bind'; //dung cai nay phai cai : npm i classnames
import styles from './Header.module.scss';
import images from '~/access/images'; //nap logo
import Tippy from '@tippyjs/react'; //nạp thư viện
import 'tippy.js/dist/tippy.css'; //nạp  css cua tippy
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //nap fortawesome
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons'; //nhung cai nay se tu dong dc them vao khi dung icon. cai solid la nhung cai mau den
import { faAppStore } from '@fortawesome/free-brands-svg-icons';

import Menu from '~/conponents/popper/Menu/Menu';

import Buttons from '~/conponents/Button/Buttons';
import { InboxIcon, MessagesIcon, UploadIcon } from '~/conponents/Icons/Icon';
import Image from '~/conponents/images/ImageTag';
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import routesconfig from '~/config/routes';

const cx = classNames.bind(styles); // giup co the viet className duoi dang dau gach ngang ' - '

const currentUser = false;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faAppStore} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'EN',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'VI',
                    title: 'Tieng viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];
const usermenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'view profile',
        to: '/thai',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    //handle logic
    const handlemenuchange = (menuitem) => {
        // console.log(menuitem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {/* // link về trang chủ */}
                    <Link to={routesconfig.home} className={cx('logo_link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                {/* search */}
                <div>
                    <Search />
                </div>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <div className={cx('inboxNumber')}>12</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Buttons text>
                                <FontAwesomeIcon className={cx('upload__icon')} icon={faPlus} />
                                Upload
                            </Buttons>
                            <Buttons primary>Log in</Buttons>
                        </>
                    )}
                    <Menu items={currentUser ? usermenu : MENU_ITEMS} onChange={handlemenuchange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avata')}
                                src="https://lh3.googleusercontent.com/ogw/AOLn63H8W9qq9mSrX4cTefS0lWPm3glVn8rp5C47UYL7pQ=s32-c-mo"
                                alt="duong thai"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
