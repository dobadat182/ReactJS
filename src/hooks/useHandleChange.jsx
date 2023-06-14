import { useState } from 'react';

const useHandleChange = (initialValues) => {
    const [value, setValue] = useState(initialValues);

    const handleChange = (e) => {
        const type = e.target.type;

        setValue({
            ...value,
            [e.target.name]:
                type === 'checkbox' ? e.target.checked : e.target.value,
        });
    };

    return { value, handleChange };
};

export default useHandleChange;
