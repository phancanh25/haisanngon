import { Footer } from 'flowbite-react';
import classNames from 'classnames';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const cx = classNames.bind();

function FooterCustom() {
    return (
        <div className={cx('w-1200 bottom-0')}>
            <Footer container={true} className={cx(' shadow-none')}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="HẢI SẢN NGON"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="VỀ CHÚNG TÔI" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">Giới thiệu</Footer.Link>
                                    <Footer.Link href="#">Liên hệ</Footer.Link>
                                    <Footer.Link href="#">Tyuển dụng</Footer.Link>
                                    <Footer.Link href="#">Tin về doanh nghiệp</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="HỖ TRỢ KHÁCH HÀNG" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">Hướng dẫn thanh toán</Footer.Link>
                                    <Footer.Link href="#">Hướng dẫn đặt hàng</Footer.Link>
                                    <Footer.Link href="#">Câu hỏi thường gặp</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="CHÍNH SÁCH & ĐIỀU KHOẢN" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">Chính sách vận chuyển</Footer.Link>
                                    <Footer.Link href="#">Chính sách đổi trả hàng</Footer.Link>
                                    <Footer.Link href="#">Chính sách bảo mật</Footer.Link>
                                    <Footer.Link href="#">Chính sách điều khoản sử dụng</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <a href="https://uis.ptithcm.edu.vn/Default.aspx?page=xemdiemthi">
                                <FacebookIcon />
                            </a>
                            <AddIcCallIcon />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}
export default FooterCustom;
