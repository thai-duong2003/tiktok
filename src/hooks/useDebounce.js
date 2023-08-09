// tự tạo  ra cái hook của chúng ta gọi la useDebounce

// lm cái này để khi người dùng ngừng vc nhập vào input thì nó mới gọi API

import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncevalue, setdebouncevalue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            return setdebouncevalue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncevalue;
}
export default useDebounce;
