import { useEffect, useRef, useState } from 'react';

const useHover = () => {
    // mouseover, mouseout;
    const [hover, setHover] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const dom = nodeRef.current;

        function handleMouseOver() {
            setHover(true);
        }
        function handleMouseOut() {
            setHover(false);
        }

        if (dom) {
            dom.addEventListener('mouseover', handleMouseOver);
            dom.addEventListener('mouseout', handleMouseOut);
        }

        // Cleanup
        return () => {
            if (dom) {
                dom.removeEventListener('mouseover', handleMouseOver);
                dom.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, []);

    return {
        hover,
        nodeRef,
    };
};

export default useHover;
