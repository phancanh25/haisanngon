import classNames from 'classnames';
import { CardCustom } from '~/components/Layout/components/Card';
import HomeFeature from './HomeFeature';
import HomeTop from './HomeTop';
const cx = classNames.bind();
function Home() {
    return (
        <div className={cx('')}>
            <HomeTop />

            <HomeFeature />

            <div className={cx('border-2 border-gray-400 my-2')}>
                <div className={cx('flex justify-between p-3 font-bold ')}>
                    <a className="text-2xl" href="!#">
                        Tôm
                    </a>
                    <button className="bg-blue-400 rounded-md p-1">XEM TẤT CẢ</button>
                </div>
                <div className={cx('grid grid-cols-6 grid-flow gap-1r overflow-hidden')}>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                </div>
            </div>
            <div className={cx('border-2 border-gray-400 my-2')}>
                <div className={cx('flex justify-between p-3 font-bold ')}>
                    <a className="text-2xl" href="!#">
                        Tôm
                    </a>
                    <button className="bg-blue-400 rounded-md p-1">XEM TẤT CẢ</button>
                </div>
                <div className={cx('grid grid-cols-6 grid-flow gap-1 box-border')}>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                    <div className={cx('w-full hover:border-2 hover:h-318 hover:border-orange-500')}>
                        <CardCustom className="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
