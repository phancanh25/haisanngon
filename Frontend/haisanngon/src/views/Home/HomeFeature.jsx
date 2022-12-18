import classNames from 'classnames';
import imgPlane from '~/assets/img/airplane-icon.png';
import imgClock from '~/assets/img/clock-icon.png';
import imgAchive from '~/assets/img/achive.png';
function HomeFeature() {
    const cx = classNames.bind();
    return (
        <div>
            <div className="w-1200 h-150 flex justify-center items-center">
                <div className="w-full h-120">
                    <div class="flex justify-between items-center h-full">
                        <div class="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgPlane} class="w-60 h-60 p-2" alt="Free ship" />
                            <div className="flex flex-col justify-center">
                                <span>MIỄN PHÍ GIAO HÀNG</span>
                                <span>{'Hóa đơn từ 500,000đ (bán kính < 5km)'}</span>
                            </div>
                        </div>
                        <div class="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgClock} class="w-60 h-60 p-2" alt="Delivery now" />
                            <div class="flex flex-col justify-center">
                                <span className="text-bold">GIAO HÀNG TRONG NGÀY</span>
                                <span className="text-bold">Áp dụng với mọi đơn hàng.</span>
                            </div>
                        </div>
                        <div class="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgAchive} class="w-60 h-60 p-2" alt="Safety-item" />
                            <div class="flex flex-col justify-center">
                                <span className="text-bold">SẢN PHẨM AN TOÀN</span>
                                <span className="text-bold">Cam kết chất lượng.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeFeature;
