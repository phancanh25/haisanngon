import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top-header')}>
                    <ul className={cx('top-header__link')}>
                        <a href="#" className={cx('top-header__item')}>
                            Đăng nhập
                        </a>
                        <a href="#" className={cx('top-header__item')}>
                            Đăng ký
                        </a>
                    </ul>
                </div>
                <div className={cx('bottom-header__wrapper')}>
                    <div className={cx('bottom-header__container')}>
                        <div className={cx('bottom-header__item bottom-header__itemtittle basis-1/6')}>
                            <span>Hello</span>
                        </div>
                        <div className={cx('bottom-header__item basis-2/3')}>02</div>
                        <div className={cx('bottom-header__item basis-1/6')}>03</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
