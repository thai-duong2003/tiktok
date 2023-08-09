//cai nay dung de hien anh du phong khi anh chinh bi loi
// viet nhu nay de co the lay dc cai ref thi moi chuyen ik dc
import { useState, forwardRef } from 'react';
import images from '~/access/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [loi, setloi] = useState('');
    const handleerror = () => {
        setloi(images.noImg);
    };
    return (
        <img
            src={loi || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            onError={handleerror}
        />
    );
});
export default Image;
