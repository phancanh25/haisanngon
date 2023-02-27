import classNames from 'classnames/bind';
import TopHeader from './TopHeader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const cx = classNames.bind();
function Header() {
    return (
        <div className={cx('w-full flex flex-col items-center bg-blue-500')}>
            <div className={cx('flex w-1200 items-center')}>
                <div className={cx('flex flex-col  w-full')}>
                    <TopHeader />
                    <div className={cx('bg-blue-500')}>
                        <div className={cx('flex flex-row h-55')}>
                            <div className={cx('flex flex-col basis-1/6 h-55 items-center justify-center')}>
                                <div className={cx('text-white font-bold text-2xl')}>HẢI SẢN NGON</div>
                            </div>
                            <div className={cx('flex justify-center items-center basis-2/3 rounded-md')}>
                                <input
                                    className={cx(
                                        'rounded-l-md h-40 placeholder:text-slate-400 block bg-white w-full border border-slate-300  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
                                    )}
                                    placeholder="Tìm kiếm..."
                                    type="text"
                                    name="search"
                                />
                                <button className={cx('h-40 bg-slate-600 w-100 text-white rounded-r-md')}>
                                    Tìm Kiếm
                                </button>
                            </div>
                            <div className={cx('basis-1/6 flex justify-center items-center relative h-55')}>
                                <span
                                    className={cx(
                                        'top-[12px] absolute bg-red-200 h-5 w-6 rounded-lg text-center left-[108px]',
                                    )}
                                >
                                    1
                                </span>
                                <ShoppingCartIcon style={{ width: '30px', height: '30px', color: 'white', margin: "10px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
