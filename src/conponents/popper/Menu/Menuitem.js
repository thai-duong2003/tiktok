import PropTypes from 'prop-types';

import Buttons from '~/conponents/Button/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menuitem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Buttons className={classes} to={data.to} lefticon={data.icon} onClick={onClick}>
            {data.title}
        </Buttons>
    );
}
Menuitem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default Menuitem;
