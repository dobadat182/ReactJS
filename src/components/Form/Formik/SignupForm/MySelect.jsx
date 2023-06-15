import { useField } from 'formik';

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props); // Chỉ lấy 2 field của array từ props (destructuring)

    return (
        <>
            <div>
                <label
                    htmlFor="countries"
                    className="inline-block mr-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Select an option
                </label>
                {meta.touched && meta.error ? (
                    <p className="inline-block mt-1 text-sm text-red-600 dark:text-red-500 first-letter:uppercase">
                        {meta.error}
                    </p>
                ) : null}

                <select
                    name="job"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...field}
                    {...props}
                />
            </div>
        </>
    );
};

export default MySelect;
