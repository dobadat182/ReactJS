import { useField } from 'formik';

const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props); // Chỉ lấy 2 field của array từ props (destructuring)

    return (
        <div>
            <label
                htmlFor={props.id || props.name}
                className="inline-block mr-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            {meta.touched && meta.error ? (
                <p className="inline-block mt-1 text-sm text-red-600 dark:text-red-500 first-letter:uppercase">
                    {meta.error}
                </p>
            ) : null}
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                {...field}
                {...props}
            />
        </div>
    );
};

export default MyInput;
