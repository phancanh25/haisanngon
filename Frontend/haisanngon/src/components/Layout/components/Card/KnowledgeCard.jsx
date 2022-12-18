import classNames from 'classnames';
import cardBanner from '~/assets/img/banner.jpg';
function KnowledgeCard() {
    const cx = classNames.bind();
    return (
        <div className={cx('border-2 border-gray-400 my-2 bg-white')}>
            <div className={cx('flex justify-between p-3 font-bold ')}>
                <a className="text-2xl" href="!#">
                    Kiến thức
                </a>
                <button className="bg-blue-400 rounded-md p-1">XEM TẤT CẢ</button>
            </div>
            <div className={cx('grid grid-cols-2 grid-flow gap-1r overflow-hidden pb-1 mb-3')}>
                <div class="w-500 h-450 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-4">
                    <a href="#">
                        <img class="rounded-t-lg w-550 h-350" src={cardBanner} alt="" />
                    </a>
                    <div class="p-2">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Tôm Xào Rau Củ
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Tôm xào rau củ là món ăn chế biến đơn giản, nhanh gọn cho mọi gia đình. Trong bài viết này,
                        </p>
                    </div>
                </div>
                <div class="w-500 h-450 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="bg-blue-300 w-full h-150 p-2">
                        <a
                            href="#"
                            class="flex flex-col items-center h-143 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={cardBanner}
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal ">
                                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white w-256 h-56overflow-hidden">
                                    Noteworthy technology acquisitions
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden w-256 h-48">
                                    Here are the biggest enterprise technology acquisitions of 2021.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="bg-blue-300 w-full h-150 p-2">
                        <a
                            href="#"
                            class="flex flex-col items-center h-143 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={cardBanner}
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal ">
                                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white w-256 h-56overflow-hidden">
                                    Noteworthy technology acquisitions
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden w-256 h-48">
                                    Here are the biggest enterprise technology acquisitions of 2021.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="bg-blue-300 w-full h-150 p-2">
                        <a
                            href="#"
                            class="flex flex-col items-center h-143 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={cardBanner}
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal ">
                                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white w-256 h-56overflow-hidden">
                                    Noteworthy technology acquisitions
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden w-256 h-48">
                                    Here are the biggest enterprise technology acquisitions of 2021.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default KnowledgeCard;
