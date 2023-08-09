import styles from './SuggesteAcounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../popper';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '../images/ImageTag';

const cx = classNames.bind(styles);

function AcountItem({ data }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                {/* 
                visible : de no luon hien len
                interactive : cho phep tuong tac hau nhu luon co
                render : hien thi cai j
                delay: thoi gian delay
                offset:[x,y] vi tri no o
                */}

                <div className={cx('acount-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AcountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AcountItem;
