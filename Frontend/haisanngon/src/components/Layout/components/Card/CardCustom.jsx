import { useDispatch, useSelector } from 'react-redux';
import { productState, fetchUsers } from '~/store/product/productSlice';
import { useEffect } from 'react';
import classNames from 'classnames';
const cx = classNames.bind();
function CardCustom() {
    const dispatch = useDispatch();
    const products = useSelector(productState);
    useEffect(() => {
        dispatch(fetchUsers(products, 'products/fetchProducts'));
        return;
    }, []);
    return (
        <div className="max-w-sm">
            {products.map((product, index) => {
                return (
                    <div className={cx('flex w-full h-318 hover:h-322')} key={index}>
                        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="!#">
                                <img alt="product image" className={cx('h-250')} src={product.anhSanPham} />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="!#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {product.tenSanPham}
                                    </h5>
                                </a>

                                <div className="flex items-center justify-between">
                                    {product.giaSanPham},000đ/{product.donVi}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default CardCustom;
