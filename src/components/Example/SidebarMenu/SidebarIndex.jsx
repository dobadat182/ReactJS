import { useState } from 'react';
import useClickOut from '../../../hooks/useClickOut';
import SideBarMenu from './SideBarMenu';

const SidebarIndex = () => {
    const [show, setShow] = useState(false);
    const { nodeRef } = useClickOut();

    return (
        <>
            <button
                onClick={() => setShow(!show)}
                className="inline-block m-3 p-3 rounded-lg text-white bg-slate-900 cursor-pointer"
            >
                Show Menu
            </button>
            <SideBarMenu show={show} ref={nodeRef} />
        </>
    );
};

export default SidebarIndex;
