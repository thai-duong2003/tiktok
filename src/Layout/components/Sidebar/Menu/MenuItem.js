import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
/* cái này nó sẽ giúp để có thẻ lm dc việc khi bấm vào thì nó có thực hiện them 1 vài cong việc
 cách hoạt đọng của NavLink: nó sẽ lấy cái path ở thanh tìm kiếm của gougle rồi so sánh với cái to mà ta chuyenf vào 
 cái nào giống nhau thì nó sẽ tự đọng thêm class active vào phần tử có cái to đấy */
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeicon }) {
    return (
        <NavLink to={to} className={(nav) => cx('Menu-Item', { active: nav.isActive })}>
            {/*phải viết class như này thì nó ms chay dc cái active  */}
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeicon}</span>
            <p className={cx('title')}>{title}</p>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
