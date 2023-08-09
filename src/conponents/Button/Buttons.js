import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Buttons({
    to,
    href,
    children,
    className, //de tao nhung cai class rieng.
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    disabled = false,
    lefticon,
    righticon,
    onClick,
    ...passprops
}) {
    // to : de link noi bo
    // href : de link ra ngoai
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops, // danh cho nhung  cai prop ko luong trc dc
    };
    if (disabled) {
        // neu trong the co disabled thi se xoa onclick ik
        Object.keys(props).forEach((key) => {
            //loc qua va kiem tra xem trong propd co cai nao bat dau tu on ko neu co thi xoa no ik
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;

        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className, //khi co gt thi no xe gan nguoc lai
        primary,
        outline,
        rounded,
        text,
        small,
        large,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}
Buttons.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Buttons;
