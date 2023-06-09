import React, { useEffect, useRef } from 'react';

const AutoFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleClick = () => {
        inputRef.current.value = 'Hello, World!';
    };

    return (
        <>
            <div className="w-full max-w-xs">
                <h1 className="text-red-700	uppercase font-extrabold text-center">Auto Fill Input</h1>
                <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            ref={inputRef}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleClick}
                        >
                            Fill Input
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AutoFocus;
