import { useEffect, useState } from 'react';

const useDebounce = (initValue, delay = 1000) => {
    const [debounce, setDebounce] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(initValue);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, initValue]);

    return debounce;
};

export default useDebounce;
