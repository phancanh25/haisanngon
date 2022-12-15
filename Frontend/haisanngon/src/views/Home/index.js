import classNames from 'classnames';
import { CardCustom } from '~/components/Layout/components/Card';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { productState, fetchUsers } from '../../store/product/productSlice';

const cx = classNames.bind();
function Home() {
    const products = useSelector(productState);
    const dispatch = useDispatch();

    return (
        <div className={cx('grid grid-cols-6 grid-flow gap-8')}>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <div className={cx('w-200')}>
                <CardCustom />
            </div>
            <Button
                onClick={() => {
                    dispatch(fetchUsers(products, 'products/fetchProducts'));
                    console.log(products);
                }}
            >
                Click me !!!
            </Button>
        </div>
    );
}

export default Home;
