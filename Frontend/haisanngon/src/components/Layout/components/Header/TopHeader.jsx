import classNames from 'classnames/bind';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const cx = classNames.bind();
function TopHeader() {
    return (
        <div className={cx('flex h-50 w-full justify-between items-center font-bold text-white bg-blue-500')}>
            <div className={cx('flex divide-x divide-dashed')}>
                <div className="pr-1 flex items-center justify-center">
                    <AddIcCallIcon className={cx('flex')} />
                </div>
                <div className="pl-1">
                    <div>0337125797</div>
                    <div className="text-xs">Hà Lợi Trung - Trung Giang - Gio Linh - Quảng Trị</div>
                </div>
            </div>
            <div className={cx('flex')}>
                <div className="pr-4">Đăng nhập</div>
                <div>Đăng ký</div>
            </div>
        </div>
    );
}
export default TopHeader;
