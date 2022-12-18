import { Link } from 'react-router-dom';
import Rightbar from './RightBar';
function Interview() {
    return (
        <div className="bg-white">
            <nav
                class="flex px-5 py-3 text-gray-700 bg-gray-200 border-b border-dashed border-indigo-600 mb-2"
                aria-label="Breadcrumb"
            >
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <Link
                            to="/"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </Link>
                    </li>

                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg
                                class="w-6 h-6 text-gray-400"
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
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Tuyển dụng
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="flex">
                <div className="bg-red-200" style={{ width: '1000px', height: '200px' }}>
                    <span className="font-bold text-xl py-6 block">TUYỂN DỤNG</span>
                    <div>
                        <h1>Tuyển Dụng Nhân Viên Social Media Part-time</h1>
                        <div>
                            <span> 20 ngõ 28 Nguyễn Khả Trạc, Cầu Giấy, Hà Nội</span>
                            <span> Bán thời gian</span>
                            <span> Dưới 6 triệu</span>
                        </div>
                        <div>
                            Lên kế hoạch đăng đăng bài viết ngày cho các mạng xã hội. Phát triển nội dung dựa trên các
                            trending hiện tại. Tương tác, quản lý thông tin, phản...
                        </div>
                        <a>Xem Chi tiết...</a>
                    </div>
                </div>
                <Rightbar />
            </div>
        </div>
    );
}

export default Interview;
