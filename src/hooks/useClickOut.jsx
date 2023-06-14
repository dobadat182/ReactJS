import { useEffect, useRef, useState } from 'react';

const useClickOut = (dom = 'button') => {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (
                nodeRef.current &&
                !nodeRef.current.contains(e.target) &&
                !e.target.matches(dom)
            ) {
                setShow(false);
            }
        };
        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);

    return {
        show,
        setShow,
        nodeRef,
    };
};

export default useClickOut;
