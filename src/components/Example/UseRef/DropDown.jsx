import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useClickOut from '../../../hooks/useClickOut';

const DropDown = () => {
    const { show, setShow, nodeRef } = useClickOut();

    return (
        <div className="relative w-full max-w-[300px]" ref={nodeRef}>
            <div
                className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer hover:bg-gray-100 flex items-center justify-between transition-all duration-1000"
                onClick={() => setShow(!show)}
            >
                <span>Selected</span>
                <ChevronDownIcon
                    className={`w-6 h-6 transition-all duration-500 ${
                        (show && 'rotate-180') || '' // Hoặc cú pháp: show ? "rotate-180" : "";
                    }`}
                />
            </div>
            {/* {show && ( */}
            <div
                className={`transition-all duration-500 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white mt-5 ${
                    show
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0  -translate-y-6'
                }`}
            >
                <div className="px-5 py-4 border-b border-b-gray-100 cursor-pointer hover:bg-gray-100">
                    Javascript
                </div>
                <div className="px-5 py-4 border-b border-b-gray-100 cursor-pointer hover:bg-gray-100">
                    PHP
                </div>
                <div className="px-5 py-4 border-b border-b-gray-100 cursor-pointer hover:bg-gray-100">
                    React Js
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

export default DropDown;
