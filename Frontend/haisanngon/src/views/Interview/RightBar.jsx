import { Link } from 'react-router-dom';
function Rightbar() {
    return (
        <div className="flex justify-center">
            <div className=" flex justify-center  drop-shadow-xl">
                <div className=" flex justify-center  drop-shadow-xl" style={{ width: '260px', height: '260px' }}>
                    <ul style={{ width: '200px', background: 'background' }}>
                        <li className="text-blue-800 font-bold p-2 text-lg border-b-2">Về chúng tôi</li>
                        <li className="font-semibold text-base p-2 border-b border-dashed">
                            <Link to="/goodcook" className="hover:underline hover:text-blue-400">
                                Giới thiệu
                            </Link>
                        </li>
                        <li className="font-semibold text-base p-2 border-b border-dashed">
                            <Link to="/policy" className="hover:underline hover:text-blue-400">
                                Chính sách mua sỉ
                            </Link>
                        </li>
                        <li className="font-semibold text-base p-2 border-b border-dashed">
                            <Link to="/profile" className="hover:underline hover:text-blue-400">
                                Thông tin doanh nghiệp
                            </Link>
                        </li>
                        <li className="font-semibold text-base p-2 border-b border-dashed">
                            <Link to="/interview" className="hover:underline">
                                Tuyển dụng
                            </Link>
                        </li>
                        <li className="font-semibold text-base p-2">
                            <Link to="/contact" className="hover:underline hover:text-blue-400">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Rightbar;
