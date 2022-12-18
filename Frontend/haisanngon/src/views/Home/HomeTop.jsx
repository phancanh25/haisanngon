import { Carousel } from 'flowbite-react';
import classNames from 'classnames';

function HomeTop() {
    const cx = classNames.bind();
    return (
        <div>
            <div className={cx('h-400 w-1200 flex bg-gray-200')}>
                <div className={cx('basis-1/4 h-full')}>
                    <div>
                        <ul className="rounded-lg">
                            <li className={cx('text-lg font-bold bg-gray-100 hover:bg-white py-1')}>
                                <a href="!#" className={cx('mx-4')}>
                                    Gà
                                </a>
                            </li>
                            <li className={cx('text-lg font-bold bg-gray-100 hover:bg-white py-1')}>
                                <a href="!#" className={cx('mx-4')}>
                                    Gà
                                </a>
                            </li>
                            <li className={cx('text-lg font-bold bg-gray-100 hover:bg-white py-1')}>
                                <a href="!#" className={cx('mx-4')}>
                                    Gà
                                </a>
                            </li>
                            <li className={cx('text-lg font-bold bg-gray-100 hover:bg-white py-1')}>
                                <a href="!#" className={cx('mx-4')}>
                                    Gà
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('basis-3/4 h-full pl-2')}>
                    <Carousel style={{ borderRadius: '0 !important' }}>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default HomeTop;
