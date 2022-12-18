import classNames from 'classnames/bind';
import { Header } from '../components/Header';
import { FooterCustom } from '../components/Footer';
import BottomHeader from '../components/Header/BottomHeader';
import { useEffect } from 'react';
import '../components/Header/BottomHeader.scss';
const cx = classNames.bind();

function DefaultLayout({ children }) {
    useEffect(() => {
        window.onscroll = function () {
            myFunction();
        };
        var navbar = document.getElementById('bot-navbar');
        var sticky = navbar.offsetTop;
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
        return;
    }, []);

    return (
        <div className={cx('flex-col flex items-center relative bg-gray-200')}>
            <Header />
            <BottomHeader classNames={cx('absolute sticky top-0')} />
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
