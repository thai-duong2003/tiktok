import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //nap fortawesome
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; //nạp thư viện tippy  ...nho phai them headless de lam may cai cham vao no ra
import classNames from 'classnames/bind';
//import * as request from '~/utils/request'; // nạp tất cả những cái export ỏ bên trong file  repuest.js
import * as searchServices from '~/Services/searchServices';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/conponents/popper';
import AccountItem from '~/conponents/AccountItem';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
    const [searchvalue, setsearchvalue] = useState(''); // searchvalue khi cai nay thay doi thi tuc la user dang go vao in input
    const [searchResult, setsearchResult] = useState([]); // ket qua tim kiem
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false); // xử lý cái loading

    const debounce = useDebounce(searchvalue, 500); //khi người dùng ngừng gõ 500ml giây

    const inputref = useRef(); //useRef: no don gian la chi luu cai gia tri cua the ma no dc gan vao
    useEffect(() => {
        //xử lý trường hợp khi input ko có value
        if (!debounce.trim()) {
            setsearchResult([]); //khi ko có value thi để nó là mảng rỗng
            return; //neu ko co value thi no return troongs
        }

        //    setloading(true); // trc khi goi API khi user gõ vao input thi la true
        /*    const fetchApi = async ()=>{
            try { // cái nay nó giông .then
                // wait : đợi có nghĩa là nó phải chờ cái này làm xong thì mới chạy đén cái dưới
              const res = await  request.lay('users/search', {
                 // cái này sẽ dc nối vào sau phần baseURL để nối đén API đích 
                    params: {
                        q: debounce, //cái nay là từ khóa tìm kiếm
                        type: 'less', //cái này dcc cấu hình do back end thiết kế
                    },
                }) // gọi API cho du an .
                // searchvalue: de day value ma nguoi dung nhap tu in put vao de tim kiem
                // trên này dùng debounce vì cái searchvalue đẵ dc đẩy vào trong debounce
                setsearchResult(res.data); //1 cái data của res , 1 cái của axios
                setloading(false); // sau khi goi API
            } catch (error) { // cái nay nó giông .catch
                setloading(false);
            }
        }
       fetchApi()
*/
        const fetchApi = async () => {
            setloading(true);
            const result = await searchServices.search(debounce);
            setsearchResult(result);
            setloading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleclear = () => {
        setsearchvalue(''); //dung xoa value
        inputref.current.focus(); //focus vao input
        setsearchResult([]);
    };
    const handledideresuilt = () => {
        setshowresult(false);
    };

    const handleChange = (e) => {
        const valuesearch = e.target.value;
        if (!valuesearch.startsWith(' ')) {
            /// nếu ko bắt đầu với dấu cách
            setsearchvalue(valuesearch);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showresult && searchResult.length > 0} //hien khi da tung tim kiem
            render={(attrs) => (
                <div className={cx('search-resuilt')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-resuilt_title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handledideresuilt} // khi bam ra ngoai cai tippy thi no se an ik
        >
            <div className={cx('search')}>
                <input
                    ref={inputref}
                    type="text"
                    placeholder="Search account and video"
                    spellCheck={false}
                    value={searchvalue}
                    onChange={handleChange}
                    onFocus={() => setshowresult(true)}
                    required
                />
                {/* spellCheck la de kiem tra chinh ta */}
                {!!searchvalue && !loading && (
                    // chuyen searchvalue ve dang boolen  true/false
                    //neu searchvalue =true và loading =true .tuc la co gia tri thi moi lay cai dang sau
                    <button className={cx('clear')} onClick={handleclear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* loading icon*/}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
