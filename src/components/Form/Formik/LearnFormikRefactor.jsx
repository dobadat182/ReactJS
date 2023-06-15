import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useRef } from 'react';
import * as Yup from 'yup';

const LearnFormikRefactor = () => {
    const getCharacterValidationError = (str) => {
        return `Your password must have at least 1 ${str} character`;
    };

    useEffect(() => {}, []);

    return (
        <div className="shadow-lg p-10 rounded-xl w-[400px]">
            <h1 className="text-center pb-3 mb-3 text-lg font-bold border-b-2">
                Signup Form
            </h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    confirmpassword: '',
                    remember: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(3, 'must be at least 3 characters long')
                        .max(20, 'Must be under 20 characters or less')
                        .email('must be a valid email')
                        .required(),

                    password: Yup.string()
                        .required('Please enter a password')
                        .min(8, 'Password must have at least 8 characters')

                        // Different error messages for different requirements
                        .matches(/[0-9]/, getCharacterValidationError('digit'))
                        .matches(
                            /[a-z]/,
                            getCharacterValidationError('lowercase'),
                        )
                        .matches(
                            /[A-Z]/,
                            getCharacterValidationError('uppercase'),
                        ),
                })}
                autocomplete="off"
                onSubmit={(values) => console.log(values)}
            >
                <Form>
                    {' '}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <Field
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                            placeholder="abcxyz@gmail.com"
                            name="username"
                        ></Field>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                            <ErrorMessage name="username"></ErrorMessage>
                        </p>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                        ></Field>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                            <ErrorMessage name="password"></ErrorMessage>
                        </p>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <Field
                                type="checkbox"
                                name="remember"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            ></Field>
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
                </Form>
            </Formik>
        </div>
    );
};

export default LearnFormikRefactor;
