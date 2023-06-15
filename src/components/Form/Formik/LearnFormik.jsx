import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';

const validate = (values) => {
    const errors = {};

    // Validate: Username
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 20) {
        errors.username = 'Must be under 20 character or less !';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
    ) {
        errors.username = 'Invalid email address';
    }

    // Validate: Password
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 character or less !';
    }

    return errors;
};

const LearnFormik = () => {
    const focus = useRef(null);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: '',
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        focus.current.focus();
    }, []);

    return (
        <div className="shadow-lg p-10 rounded-xl w-[400px]">
            <h1 className="text-center pb-3 mb-3 text-lg font-bold border-b-2">
                Signup Form
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        placeholder="name@flowbite.com"
                        name="username"
                        ref={focus}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.username && formik.errors.username ? (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                            <span className="font-medium">Oops!</span>{' '}
                            {formik.errors.username}
                        </p>
                    ) : null}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                            <span className="font-medium">Oops!</span>{' '}
                            {formik.errors.password}
                        </p>
                    ) : null}
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            name="remember"
                            value={formik.values.checkbox}
                            onChange={formik.handleChange}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900"
                    >
                        Remember me
                    </label>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LearnFormik;
