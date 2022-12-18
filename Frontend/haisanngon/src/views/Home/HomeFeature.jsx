import imgPlane from '~/assets/img/airplane-icon.png';
import imgClock from '~/assets/img/clock-icon.png';
import imgAchive from '~/assets/img/achive.png';
function HomeFeature() {
    return (
        <div>
            <div className="w-1200 h-150 flex justify-center items-center">
                <div className="w-full h-120">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgPlane} className="w-60 h-60 p-2" alt="Free ship" />
                            <div className="flex flex-col justify-center">
                                <span>MIỄN PHÍ GIAO HÀNG</span>
                                <span>{'Hóa đơn từ 500,000đ (bán kính < 5km)'}</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgClock} className="w-60 h-60 p-2" alt="Delivery now" />
                            <div className="flex flex-col justify-center">
                                <span className="text-bold">GIAO HÀNG TRONG NGÀY</span>
                                <span className="text-bold">Áp dụng với mọi đơn hàng.</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-360  items-center bg-white h-full border-4 border-gray-400">
                            <img src={imgAchive} className="w-60 h-60 p-2" alt="Safety-item" />
                            <div className="flex flex-col justify-center">
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
