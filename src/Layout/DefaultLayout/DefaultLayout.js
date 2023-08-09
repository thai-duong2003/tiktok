import PropTypes from 'prop-types';

import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/Layout/components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
