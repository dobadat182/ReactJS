import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import MyInput from './MyInput';
import MySelect from './MySelect';
import MyCheckbox from './MyCheckbox';

const SignupForm = () => {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            className="w-8 h-8 mr-2"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                            alt="logo"
                        />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>

                            {/* FORMIK */}
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    terms: false,
                                    job: '',
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string()
                                        .min(
                                            3,
                                            'must be at least 3 characters long',
                                        )
                                        .max(
                                            20,
                                            'Must be under 20 characters or less',
                                        )
                                        .email('must be a valid email')
                                        .required(),
                                    password: Yup.string().required(),
                                    confirmPassword: Yup.string().required(),
                                    terms: Yup.boolean().required(),
                                    job: Yup.string().required(),
                                })}
                                onSubmit={(values, actions) => {
                                    actions.resetForm({
                                        email: '',
                                        password: '',
                                        confirmPassword: '',
                                        terms: false,
                                        job: '',
                                    });

                                    setTimeout(() => {
                                        actions.setSubmitting(false);
                                    }, 5000);
                                    console.log(values);
                                }}
                            >
                                {(formik) => {
                                    return (
                                        <Form className="space-y-4 md:space-y-6">
                                            <MyInput
                                                label="Your email"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="abc@gmail.com"
                                            ></MyInput>

                                            <MyInput
                                                label="Password"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                            ></MyInput>

                                            <MyInput
                                                label="Confirm Password"
                                                id="confirm-password"
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="••••••••"
                                            ></MyInput>

                                            <MySelect
                                                label="Select your job"
                                                id="job"
                                                name="job"
                                            >
                                                <option value="">
                                                    Please select your job
                                                </option>
                                                <option value="FE">
                                                    Frontend Developer
                                                </option>
                                                <option value="BE">
                                                    Backend Developer
                                                </option>
                                                <option value="FS">
                                                    Fullstack Developer
                                                </option>
                                            </MySelect>

                                            <MyCheckbox name="terms">
                                                Terms and Conditions
                                            </MyCheckbox>

                                            <button
                                                type="submit"
                                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                                disabled={formik.isSubmitting}
                                            >
                                                Create an account{' '}
                                                {formik.isSubmitting && (
                                                    <svg
                                                        className="animate-spin h-5 w-5 mr-3 ..."
                                                        viewBox="0 0 24 24"
                                                    ></svg>
                                                )}
                                            </button>

                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Already have an account?{' '}
                                                <a
                                                    href="#"
                                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                >
                                                    Login here
                                                </a>
                                            </p>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupForm;
