import { useState } from 'react';
import useHandleChange from '../../hooks/useHandleChange';

const FormInput = () => {
    const { value, handleChange } = useHandleChange({
        fullname: '',
        email: '',
        hobby: false,
    });

    return (
        <form className="p-5 flex flex-col gap-y-5" autoComplete="off">
            <input
                type="text"
                name="fullname"
                id=""
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                placeholder="Enter your name"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                id=""
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg resize-none"
                placeholder="Enter your email"
                onChange={handleChange}
            />
            <div className="flex gap-x-3">
                <input
                    onClick={handleChange}
                    type="checkbox"
                    name="check"
                    id=""
                />
                <span>Remember me !</span>
            </div>

            <button
                type="submit"
                className="p-3 rounded-lg text-white bg-blue-500"
            >
                Submit
            </button>
        </form>
    );
};

export default FormInput;
