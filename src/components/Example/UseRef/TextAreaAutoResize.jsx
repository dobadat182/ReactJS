import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Chiều cao sẽ flexible theo content bên trong mà thẻ textarea không làm được
const TextAreaAutoResize = () => {
    const [text, setText] = useState('demo');
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');

    const handleChange = (e) => {
        setTextareaHeight('auto');
        setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
        setText(e.target.value);
    };

    useLayoutEffect(() => {
        // Dùng useEffect sẽ bị giựt
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
        setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    }, [text]);

    return (
        <>
            <div
                className="max-w-xl shadow-xl p-10 rounded-lg"
                style={{ minHeight: parentHeight }}
            >
                <textarea
                    className="transition-all duration-1000 overflow-hidden leading-normal w-full max-w-[400px] p-5 border rounded-lg border-gray-300 focus:border-blue-400 resize-none"
                    placeholder="Please enter your content..."
                    ref={textareaRef}
                    style={{ height: textareaHeight }}
                    value={text}
                    onChange={handleChange}
                ></textarea>
            </div>
        </>
    );
};

export default TextAreaAutoResize;
