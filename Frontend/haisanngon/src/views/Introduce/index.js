import { Link } from 'react-router-dom';
import introBanner from '~/assets/img/intro-banner.jpg';

function Following() {
    return (
        <div>
            <nav
                className="flex px-5 py-3 text-gray-700 bg-gray-200 border-b border-dashed border-indigo-600 mb-2"
                aria-label="Breadcrumb"
            >
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                alt="Home"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </Link>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                Giới Thiệu
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="flex bg-white">
                <div className="max-w-800 drop-shadow-xl" style={{ maxWidth: '900px' }}>
                    <div className="bg-white p-3 leading-relaxed">
                        <h1 className="font-bold text-xl">Giới Thiệu</h1>
                        <p>
                            Haisan.online là một hệ thống bán lẻ hải sản online thuộc cty TNHH BigTown Việt Nam. Dự án
                            được bắt đầu triển khai từ đầu 01/2022 với mục tiêu trở thành một trong những kênh bán lẻ
                            online lớn nhất Việt Nam. Haisan.online tập trung kinh doanh vào ba dòng sản phẩm hải sản
                            chính bao gồm: hải sản tươi sống chất lượng cao, hải sản nhập khẩu và hải sản đông lạnh.
                        </p>
                        <div>
                            <img src={introBanner} style={{ margin: '20px 50px' }} alt="Home"></img>
                        </div>
                        <p>
                            Ý tưởng dự án được ra đời từ đầu tháng 9/2021 – giai đoạn các thành phố lớn trên cả nước
                            đang dưới lệnh giãn cách xã hội do đại dịch Covid-19. Nhận thấy, sau 2 năm chịu sự tác động
                            của đại dịch, hành vi mua sắm của người tiêu dùng đã chuyển dịch từ mua sắm offline sang mua
                            sắm online trong hầu hết các ngành nghề. Kinh doanh bán lẻ hải sản không nằm ngoài xu hướng
                            đó .
                        </p>
                        <p>
                            Ngành bán lẻ hải sản là một trong những ngành nghề có sự dịch chuyển chậm hơn so với các
                            ngành nghề khác (idea.gov.vn, 2021). Do đặc thù về sản phẩm là mặt hàng tươi sống và tư duy
                            kinh doanh của các doanh nghiệp. Tuy nhiên, sự thay đổi về về xu hướng mua sắm tiêu dùng
                            buộc các đơn vị bán lẻ phải chuyển đổi để đáp ứng được nhu cầu của người tiêu dùng và tồn
                            tại được trong tương lai.
                        </p>
                        <p>
                            Hải sản được xếp vào loại thực phẩm cao cấp, giá thành cao, đặc biệt là các loại hải sản
                            nhập khẩu, thường khó tiếp cận với đại đa số người dân. Tuy nhiên, với sự phát triển về kỹ
                            thuật nuôi trồng, thu nhập của người dân tăng lên và ngày càng có nhiều đơn vị nhảy vào kinh
                            doanh hải sản làm cho giá thành sản phẩm càng ngày càng tốt hơn, tiếp cận được với đại đa số
                            người dân hơn.
                        </p>
                        <p>
                            Hơi nữa, đại dịch Covid-19 ngoài việc thay đổi hành vi mua sắm cũng tác động to lớn thay đổi
                            hành sử dụng, tiêu dùng của người dùng. Thay vì đi ăn ở tại các nhà hàng bên ngoài, họ có xu
                            hướng mua về chế biết tại nhà để bảo vệ bản thân và cũng tiếc kiệm chi phí hơn.
                        </p>
                        <p>
                            Dựa trên những phân tích trên, Hải sản online được ra đời và nhanh chóng được vận hành triển
                            khai nhằm đáp ứng với sự thay đổi của thị trường.
                        </p>
                        <h1 className="font-bold text-xl">
                            Haisan.online khác gì so với các đơn vị kinh doanh hải sản khác?
                        </h1>
                        <p>
                            Haisan.online là một thương hiện trong lĩnh vực bán lẻ hải sản. Chúng tôi không sở hữu bất
                            kỳ một cửa hàng offline nào tuy nhiên chúng tôi là đơn vị kết nối, hợp tác tất cả cửa hàng
                            hải sản để phân phối, giao hàng đến khách hàng trên toàn quốc dưới một thương hiệu duy nhất
                            haisan.online
                        </p>
                        <p>
                            Haisan.online chỉ tham gia và chịu trách nhiệm vào một số công đoạn của chu kỳ sản phẩm, đó
                            là thực hiện hoạt động sàn lọc sản phẩm, marketing, phân phối và chăm sóc khách hàng. Đó
                            cũng chính là các khâu mạnh nhất mà BigTown Việt Nam có được dựa trên kinh nghiệm phát triển
                            các thương hiệu kinh doanh trên toàn quốc.
                        </p>
                        <p>
                            Như tên thương hiệu sản phẩm haisan.online, chúng tôi sẽ chỉ kinh doanh đồ hài sản trên nền
                            tảng online và sử dụng gần 100% các kênh Digital để thực hiện các chiến dịch marketing, xây
                            dựng thương hiệu và Chăm sóc Khách hàng.
                        </p>
                        <h1 className="font-bold text-xl">Cam kết về chất lượng sản phẩm</h1>
                        <p>
                            Chúng tôi hiểu, chất lượng sản phẩm quyết định sống còn đến sự tồn tại và phát triển của một
                            thương hiệu. Chính vì thế các sản phẩm hải sản của chúng tôi sẽ phải đạt được các tiêu chuẩn
                            chất lượng cao: đồng đều về size và độ tương sống. Các sản phẩm phải có nguồn gốc xuất xứ rõ
                            ràng.
                        </p>
                        <p>
                            Hệ thống các cửa hàng hải sản liên kết rộng khắp cho phép chúng tôi triển khai dịch vụ
                            delivery nhanh, giảm thời gian giao hàng đến tay khách hàng thấp nhất. Đảm bảo sản phẩm luôn
                            tươi sống.
                        </p>
                        <p>
                            Bên cạnh đó, chính sách đổi trả hàng hóa cũng được áp dụng. Nếu các sản phẩm không như kỳ
                            vọng, khách hàng có thể đổi trả dựa theo các điều khoản được quy định cụ thể trong chính
                            sách của haisan.online.
                        </p>
                        <h1 className="font-bold text-xl">Đội ngũ sáng lập</h1>
                        <p>
                            Haisan.online là một thương hiện được thành lập bởi 2 thành viên chủ chốt thuộc Cty TNHH
                            BigTown Việt Nam.
                        </p>
                        <h1 className="font-bold text-xl">Hiếu Nguyễn – CEO & Founder</h1>
                        <p>
                            Tốt nghiệp thạc sỹ Marketing tại đại học Swinburne University of Technology. Hiếu Nguyễn về
                            làm việc cho một công ty viễn thông tại Việt Nam với vai trò trưởng nhóm nghiên cứu thị
                            trường và phát triển các sản phẩm công nghệ mới tại công ty. Sau hơn 5 năm làm việc tại đây,
                            anh rời khỏi cty và bắt đầu con đường khởi nghiệp riêng và thành lập công ty TNHH BigTown
                            Việt Nam.
                        </p>
                        <p>
                            Hiếu Nguyễn có kinh nghiệm phát triển các thương hiệu sản phẩm hoạt động trải rộng trên toàn
                            quốc qua thương hiệu MOTOGO – dịch vụ cho thuê xe máy chuyên nghiệp toàn quốc.
                        </p>
                        <p>
                            Với thương hiệu haisan.online cũng sẽ được kỳ vọng trở thành một thương hiệu số 1 trong lĩnh
                            vực bán lẻ hải sản online tại Việt Nam.
                        </p>
                        <p>Liên hệ: Facebook – Linkedin – Pinterest – Instagram – Twitter</p>
                        <h1 className="font-bold text-xl">Linh Phạm – COO</h1>
                        <p>
                            Linh Phạm theo học chuyên ngành Hệ Thống Thông Tin tại Đại học Công Nghiệp Hà Nội. Gia nhập
                            BigTown Việt Nam từ những ngày đầu thành lập, sau gần 3 năm Linh Phạm đang đảm nhiệm vai trò
                            COO quản lý vận hành các mảng dịch vụ của công ty. Ngoài ra, Linh Phạm có 2 năm kinh nghiệm
                            triển khai nội dung và xây dựng kế hoạch Marketing tại công ty.
                        </p>
                        <p>
                            Là người trẻ theo lối sống Eatclean và đam mê nấu nướng tìm hiểu thực phẩm dinh dưỡng, Linh
                            Phạm đồng sáng lập và tham gia dự án haisan.online ngay từ những ngày đầu hình thành ý
                            tưởng. Cô chịu trách nhiệm kiểm soát, quản lý xây dựng đội ngũ Marketing triển khai dự án.
                            Nhằm đảm bảo thông tin sản phẩm cùng kiến thức mang đến cho người dùng chính xác, chân thực
                            nhất.
                        </p>
                        <p>Liên hệ: Facebook – Linkedin – Pinterest – Instagram – Twitter</p>
                        <h1 className="font-bold text-xl">Sứ mệnh</h1>
                        <p>
                            Sứ mệnh của chúng tôi là xây dựng haisan.online trở thành một kênh bán lẻ hải sản online lớn
                            nhất Việt Nam. Giúp cho các cửa hàng đơn vị bán lẻ hải sản không có kinh nghiệm triển khai
                            các kênh bán hàng trực tuyến kinh doanh có lợi nhuận trên nền tảng số. Số hóa các hoạt động
                            trong vận hành trong các cửa hàng, đồng bộ, kết nối các dữ liệu cửa hàng giúp cho hoạt động
                            kinh doanh được tối ưu hóa. Đưa sản phẩm hải sản tiếp cận với được với đại đa số người dân
                            dễ dàng hơn qua kênh phân phối và giá thành sản phẩm.
                        </p>
                        <h1 className="font-bold text-xl">Tầm nhìn</h1>
                        <p>
                            Trong 3 năm tới haisan.online sẽ trở thành kênh bán lẻ hải sản online lớn nhất Việt Nam. Có
                            mạng lưới cửa hàng liên kết phủ rộng hầu hết các thành phố lớn.
                            <br />
                            Là kênh bán lẻ sản hải sản số 1 trên nền tảng website và nền tảng mạng xã hội.
                        </p>
                        <h1 className="font-bold text-xl">Thông tin liên hệ</h1>
                        <p>
                            Haisan.online – Kênh bán lẻ hải sản online lớn nhất Việt Nam
                            <br />
                            Điện thoại: 0355 370 347
                            <br />
                            Email: haisan.online2022@gmail.com
                            <br />
                            Địa chỉ: 20 ngõ 28 Nguyễn Khả Trạc, Mai Dịch, Cầu Giấy, Hà Nội
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className=" flex justify-center  drop-shadow-xl">
                        <div
                            className=" flex justify-center  drop-shadow-xl"
                            style={{ width: '260px', height: '260px' }}
                        >
                            <ul style={{ width: '200px', background: 'background' }}>
                                <li className="text-blue-800 font-bold p-2 text-lg border-b-2">Về chúng tôi</li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/policy" className="hover:underline hover:text-blue-400">
                                        Chính sách mua sỉ
                                    </Link>
                                </li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/goodcook" className="hover:underline hover:text-blue-400">
                                        Món ăn ngon
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
            </div>
        </div>
    );
}

export default Following;
