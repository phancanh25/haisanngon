import { Link } from 'react-router-dom';
import imgCard from '~/assets/img/intro-banner.jpg';
import Rightbar from './Rightbar';
function GoodCook() {
    return (
        <div>
            <nav
                className="flex px-5 py-3 text-gray-700 bg-gray-200 border-b border-dashed border-indigo-600 mb-2"
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                alt="Home"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </Link>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Món ngon
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="flex bg-white w-full">
                <div className="drop-shadow-xl w-full" style={{ maxWidth: '1000px' }}>
                    <div className="bg-white p-3 leading-relaxed">
                        <h1 className="font-bold text-xl">KIẾN THỨC MÓN NGON</h1>
                        <p>
                            Tổng hợp các bài viết chuyên sâu và công thức chế biến các loại hải sản phổ biến hiện nay!
                        </p>
                    </div>

                    <a
                        href="#"
                        style={{ width: '1000px' }}
                        class="flex bg-white shadow-md hover:bg-gray-100 py-4 border-y"
                    >
                        <img class="" style={{ width: '250px', height: '180px' }} src={imgCard} alt="a" />
                        <div class="flex flex-col p-4 ">
                            <h5
                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                                style={{ height: '64px', maxWidth: '714px' }}
                            >
                                Noteworthy technology acquisitions 2021 AAAAAAAAAAAAAAAaaaaaaa
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700"
                                style={{ maxHeight: '68px', maxWidth: '714px', overflow: 'hidden' }}
                            >
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here are
                                the biggest enterprise technology acquisitions of 2021 so far, in reverse Here are the
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse biggest
                                enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                    </a>
                    <a
                        href="#"
                        style={{ width: '1000px' }}
                        class="flex bg-white shadow-md hover:bg-gray-100 py-4 border-y"
                    >
                        <img class="" style={{ width: '250px', height: '180px' }} src={imgCard} alt="a" />
                        <div class="flex flex-col p-4 ">
                            <h5
                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                                style={{ height: '64px', maxWidth: '714px' }}
                            >
                                Noteworthy technology acquisitions 2021 AAAAAAAAAAAAAAAaaaaaaa
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700"
                                style={{ maxHeight: '68px', maxWidth: '714px', overflow: 'hidden' }}
                            >
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here are
                                the biggest enterprise technology acquisitions of 2021 so far, in reverse Here are the
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse Here
                                are the biggest enterprise technology acquisitions of 2021 so far, in reverse biggest
                                enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                    </a>
                </div>
                <Rightbar />
            </div>
        </div>
    );
}

export default GoodCook;
