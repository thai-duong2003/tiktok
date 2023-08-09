import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import Buttons from '~/conponents/Button/Buttons';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/conponents/images/ImageTag';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avata')} src={data.avatar} alt="" />
                <div>
                    {' '}
                    <Buttons primary className={cx('following-btn')}>
                        Flollowing
                    </Buttons>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                <p className={cx('anakytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('lable')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
