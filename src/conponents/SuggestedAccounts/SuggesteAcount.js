import styles from './SuggesteAcounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AcountItem from './AcountItem';

const cx = classNames.bind(styles);

function SuggesteAcount({ lable, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.map((account) => (
                <AcountItem key={account.id} data={account} />
            ))}

            <p className={cx('seeall')}>See All</p>
        </div>
    );
}
SuggesteAcount.propTypes = {
    lable: PropTypes.string,
    data: PropTypes.array,
    isSeeAll: PropTypes.bool,
};
export default SuggesteAcount;
