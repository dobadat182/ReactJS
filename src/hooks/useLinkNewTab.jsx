import React, { useEffect, useRef } from 'react';

const useLinkNewTab = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef) {
            const links = contentRef.current.querySelectorAll('a');
            links.forEach((element) => {
                links.length > 0 && element.setAttribute('target', '_blank');
            });
        }
    });
    return {
        contentRef,
    };
};

export default useLinkNewTab;
