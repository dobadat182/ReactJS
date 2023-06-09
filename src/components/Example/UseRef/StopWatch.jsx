import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);

    const handleStart = () => {
        console.log('Start');
        if (timerRef.current) return;

        timerRef.current = setInterval(() => {
            setCount((setCount) => setCount + 1);
        }, 1000);
    };

    const handlePause = () => {
        console.log('Pause');
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const handleClear = () => {
        console.log('Clear');
        handlePause();
        setCount(0);
    };

    // Rời component không chạy nữa bằng cách cleanup function
    useEffect(() => {
        return () => clearInterval(timerRef.current); // side effects
    }, []);

    return (
        <>
            <div className="w-full max-w-xs">
                <h1 className="text-red-700	uppercase font-extrabold text-center">Stop Watch</h1>
                <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 text-center">
                        <span className="font-black">{count}s</span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <button
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePause}
                        >
                            Pause
                        </button>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleStart}
                        >
                            Start
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <button
                            className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default StopWatch;
