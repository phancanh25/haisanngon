import classNames from 'classnames';
import { CardCustom } from '~/components/Layout/components/Card';
function CardContainer() {
    const cx = classNames.bind();
    return (
        <div className={cx('border-2 border-gray-400 my-2')}>
            <div className={cx('flex justify-between p-3 font-bold ')}>
                <a className="text-2xl" href="!#">
                    Tôm
                </a>
                <button className="bg-blue-400 rounded-md p-1">XEM TẤT CẢ</button>
            </div>
            <div className={cx('grid grid-cols-6 grid-flow gap-1r overflow-hidden pb-1')}>
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
    );
}

export default CardContainer;
