import React from 'react';

// eslint-disable-next-line react/display-name
const SideBarMenu = React.forwardRef((props, ref) => {
    return (
        <div
            className={`w-[300px] bg-slate-800 shadow-md fixed top-0 left-0 bottom-0 z-10 transition-transform duration-500 ${
                props?.show ? '' : '-translate-x-full'
            }`}
            ref={ref}
        ></div>
    );
});

export default SideBarMenu;
