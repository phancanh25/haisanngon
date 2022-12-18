import classNames from 'classnames/bind';
import DehazeIcon from '@mui/icons-material/Dehaze';

function BottomHeader() {
    const cx = classNames.bind();
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
        <div id="bot-navbar" className={cx('flex w-full items-center justify-center bg-white')}>
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
                    <a
                        key={index}
                        href="!#"
                        className={cx('pr-4 text-blue-900 bh-white font-bold h-full flex items-center p-2')}
                    >
                        {content}
                    </a>
                ))}
            </div>
        </div>
    );
}
export default BottomHeader;
