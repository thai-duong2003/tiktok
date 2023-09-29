import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless'; //nho phai them headless
import { Wrapper as PopperWrapper } from '~/conponents/popper'; //la cai shatdow cho Tippy
import Menuitem from './Menuitem';
import Header from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultfn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    const [history, sethistory] = useState([{ data: items }]); // data : gan ten cho mang.  de lay dc cac cap cua mang

    const curren = history[history.length - 1];
    const renderitems = () => {
        return curren.data.map((item, index) => {
            //dat data giong o ben MENU-ITEM de khi vao children thi co cung key la :data
            const isparent = !!item.children; // kiem tra xem trong item co con la children ko neu co thi se tra ve true
            return (
                <Menuitem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isparent) {
                            sethistory((prev) => [...prev, item.children]); //prev =>  : arrount function
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive //cho phep tuong tac
            //visible //de no luon hien
            placement="bottom-end" //vi tri hien thi
            offset={[15, 8]} // vi tri di chuyen [chieu ngang, cao]
            delay={[0, 700]} // delay : [thoi gian hien , thoi gian an ]
            hideOnClick={hideOnClick} // đẻ khi bấm vào thì nó sẽ ko bị ẩn ik
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={curren.title}
                                onback={() => {
                                    sethistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderitems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => sethistory((prev) => prev.slice(0, 1))} // de no quay tro ve menu cap 1 khi ma cai tippy no tat ik
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
