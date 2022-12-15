import classNames from 'classnames/bind';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
const cx = classNames.bind();
function Header() {
    const headerContent = [
        'Trang Chủ',
        'Giới thiệu',
        'Chính sách mua sỉ',
        'Món ăn ngon',
        'Thông tin doanh nghiệp',
        'Tuyển dụng',
        'Liên hệ',
    ];
    return (
        <div className={cx('w-full flex justify-center bg-blue-500')}>
            <div className={cx('flex w-1200 items-center')}>
                <div className={cx('flex flex-col h-140 w-full')}>
                    <div className={cx('flex h-50 w-full justify-end items-center font-bold text-white bg-blue-500')}>
                        <div className="pr-4">Đăng nhập</div>
                        <div>Đăng ký</div>
                    </div>
                    <div className={cx('h-105 bg-blue-500')}>
                        <div className={cx('flex flex-row h-105')}>
                            <div className={cx('flex flex-col basis-1/6')}>
                                <div
                                    className={cx(
                                        'text-white flex flex-row h-55 items-center justify-center font-bold text-2xl',
                                    )}
                                >
                                    HẢI SẢN NGON
                                </div>
                                <div
                                    className={cx(
                                        'text-white flex flex-row h-50 items-center justify-center font-bold text-xl bg-red-400 ',
                                    )}
                                >
                                    <DehazeIcon style={{ fontSize: '35px', marginRight: '10px' }} />
                                    SẢN PHẨM
                                </div>
                            </div>
                            <div className={cx('basis-2/3')}>
                                <div className={cx('flex h-55 justify-center items-center bg-red-500 p-1')}>
                                    <input
                                        className={cx(
                                            'h-46 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
                                        )}
                                        placeholder="Tìm kiếm..."
                                        type="text"
                                        name="search"
                                    />
                                    <button className={cx('h-46 bg-slate-600 w-100 rounded-md ml-1 text-white')}>
                                        Tìm Kiếm
                                    </button>
                                </div>
                                <div className={cx('h-50 flex items-center flex-wrap justify-between')}>
                                    {headerContent.map((content, index) => (
                                        <a key={index} href="!#" className={cx('pr-4 text-white')}>
                                            {content}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('basis-1/6 flex justify-center items-center relative')}>
                                <span
                                    className={cx(
                                        'top-[12px] absolute bg-red-200 h-5 w-6 rounded-lg text-center left-[108px]',
                                    )}
                                >
                                    1
                                </span>
                                <ShoppingCartIcon style={{ width: '50px', height: '50px', color: 'white' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
