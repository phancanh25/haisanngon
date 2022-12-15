import classNames from 'classnames/bind';
import { Header } from '../components/Header';
import { FooterCustom } from '../components/Footer';
const cx = classNames.bind();

function DefaultLayout({ children }) {
    return (
        <div className={cx('flex-col flex items-center relative bg-gray-200')}>
            <Header />

            <div className={cx('w-1200 flex')}>
                <div className={cx('flex-1')}>{children}</div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className={cx('bg-white w-full flex justify-center')}>
                <FooterCustom className={cx('bottom-0')} />
            </div>
        </div>
    );
}

export default DefaultLayout;
