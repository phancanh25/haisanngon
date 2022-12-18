import classNames from 'classnames/bind';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

function BottomHeader() {
    const cx = classNames.bind();
    const headerContent = [
        // 'Trang Chủ',
        // 'Giới thiệu',
        // 'Chính sách mua sỉ',
        // 'Món ăn ngon',
        // 'Thông tin doanh nghiệp',
        // 'Tuyển dụng',
        // 'Liên hệ',
        { tittle: 'Trang Chủ', path: '/' },
        { tittle: 'Giới thiệu', path: '/introduce' },
        { tittle: 'Chính sách mua sỉ', path: '/policy' },
        { tittle: 'Món ăn ngon', path: '/goodcook' },
        { tittle: 'Thông tin doanh nghiệp', path: '/profile' },
        { tittle: 'Tuyển dụng', path: '/interview' },
        { tittle: 'Liên hệ', path: '/contact' },
    ];
    return (
        <div id="bot-navbar" className={cx('flex w-full items-center justify-center bg-white z-10')}>
            <div
                className={cx(
                    'text-white flex flex-row h-40 items-center justify-center font-bold text-xl bg-blue-800 w-200',
                )}
            >
                <DehazeIcon style={{ fontSize: '20px', marginRight: '10px' }} />
                SẢN PHẨM
            </div>
            <div className={cx('h-40 flex items-center flex-wrap w-1000')}>
                {headerContent.map((content, index) => (
                    <Link
                        key={index}
                        to={content.path}
                        className={cx('pr-4 text-blue-900 bh-white font-bold h-full flex items-center p-2')}
                    >
                        {content.tittle}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default BottomHeader;
