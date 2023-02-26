import { useState } from 'react';

function SignInForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstParam: pass,
        //         secondParam: 'yourOtherValue',
        //     }),
        // });
        console.log(data);
        event.preventDefault();
    };

    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(data);
    };

    return (
        <div>
            <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-slate-600/50">
                <div className=" relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">ĐĂNG NHẬP</h3>
                            <form onSubmit={handleSubmit} className="space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tài khoản
                                    </label>
                                    <input
                                        onChange={(e) => handle(e)}
                                        type="username"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Tài khoản"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        onChange={(e) => handle(e)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <label
                                            htmlFor="remember"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                                        Quên mật khẩu ?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    ĐĂNG NHẬP
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Bạn chưa đăng ký?{' '}
                                    <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                        Tạo tài khoản mới
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="bg-red-500 absolute left-60 top-60">
        //     {/* onSubmit={handleSubmit} */}
        //     <form>
        //         <div className="input-container">
        //             <label>Username </label>
        //             <input
        //                 color="red"
        //                 className="bg-blue-500"
        //                 onChange={(e) => handle(e)}
        //                 id="username"
        //                 type="text"
        //                 name="username"
        //                 value={data.username}
        //                 required
        //             />
        //             {/* {renderErrorMessage('uname')} */}
        //         </div>
        //         <div className="input-container">
        //             <label>Password </label>
        //             <input
        //
        //                 className="bg-blue-500"
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 required
        //             />
        //             {/* {renderErrorMessage('pass')} */}
        //         </div>
        //         <div className="">
        //             <input type="submit" />
        //         </div>
        //     </form>
        // </div>
    );
}

export default SignInForm;
