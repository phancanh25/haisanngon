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
                                Gi???i Thi???u
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="flex bg-white">
                <div className="max-w-800 drop-shadow-xl" style={{ maxWidth: '900px' }}>
                    <div className="bg-white p-3 leading-relaxed">
                        <h1 className="font-bold text-xl">Gi???i Thi???u</h1>
                        <p>
                            Haisan.online l?? m???t h??? th???ng b??n l??? h???i s???n online thu???c cty TNHH BigTown Vi???t Nam. D??? ??n
                            ???????c b???t ?????u tri???n khai t??? ?????u 01/2022 v???i m???c ti??u tr??? th??nh m???t trong nh???ng k??nh b??n l???
                            online l???n nh???t Vi???t Nam. Haisan.online t???p trung kinh doanh v??o ba d??ng s???n ph???m h???i s???n
                            ch??nh bao g???m: h???i s???n t????i s???ng ch???t l?????ng cao, h???i s???n nh???p kh???u v?? h???i s???n ????ng l???nh.
                        </p>
                        <div>
                            <img src={introBanner} style={{ margin: '20px 50px' }} alt="Home"></img>
                        </div>
                        <p>
                            ?? t?????ng d??? ??n ???????c ra ?????i t??? ?????u th??ng 9/2021 ??? giai ??o???n c??c th??nh ph??? l???n tr??n c??? n?????c
                            ??ang d?????i l???nh gi??n c??ch x?? h???i do ?????i d???ch Covid-19. Nh???n th???y, sau 2 n??m ch???u s??? t??c ?????ng
                            c???a ?????i d???ch, h??nh vi mua s???m c???a ng?????i ti??u d??ng ???? chuy???n d???ch t??? mua s???m offline sang mua
                            s???m online trong h???u h???t c??c ng??nh ngh???. Kinh doanh b??n l??? h???i s???n kh??ng n???m ngo??i xu h?????ng
                            ???? .
                        </p>
                        <p>
                            Ng??nh b??n l??? h???i s???n l?? m???t trong nh???ng ng??nh ngh??? c?? s??? d???ch chuy???n ch???m h??n so v???i c??c
                            ng??nh ngh??? kh??c (idea.gov.vn, 2021). Do ?????c th?? v??? s???n ph???m l?? m???t h??ng t????i s???ng v?? t?? duy
                            kinh doanh c???a c??c doanh nghi???p. Tuy nhi??n, s??? thay ?????i v??? v??? xu h?????ng mua s???m ti??u d??ng
                            bu???c c??c ????n v??? b??n l??? ph???i chuy???n ?????i ????? ????p ???ng ???????c nhu c???u c???a ng?????i ti??u d??ng v?? t???n
                            t???i ???????c trong t????ng lai.
                        </p>
                        <p>
                            H???i s???n ???????c x???p v??o lo???i th???c ph???m cao c???p, gi?? th??nh cao, ?????c bi???t l?? c??c lo???i h???i s???n
                            nh???p kh???u, th?????ng kh?? ti???p c???n v???i ?????i ??a s??? ng?????i d??n. Tuy nhi??n, v???i s??? ph??t tri???n v??? k???
                            thu???t nu??i tr???ng, thu nh???p c???a ng?????i d??n t??ng l??n v?? ng??y c??ng c?? nhi???u ????n v??? nh???y v??o kinh
                            doanh h???i s???n l??m cho gi?? th??nh s???n ph???m c??ng ng??y c??ng t???t h??n, ti???p c???n ???????c v???i ?????i ??a s???
                            ng?????i d??n h??n.
                        </p>
                        <p>
                            H??i n???a, ?????i d???ch Covid-19 ngo??i vi???c thay ?????i h??nh vi mua s???m c??ng t??c ?????ng to l???n thay ?????i
                            h??nh s??? d???ng, ti??u d??ng c???a ng?????i d??ng. Thay v?? ??i ??n ??? t???i c??c nh?? h??ng b??n ngo??i, h??? c?? xu
                            h?????ng mua v??? ch??? bi???t t???i nh?? ????? b???o v??? b???n th??n v?? c??ng ti???c ki???m chi ph?? h??n.
                        </p>
                        <p>
                            D???a tr??n nh???ng ph??n t??ch tr??n, H???i s???n online ???????c ra ?????i v?? nhanh ch??ng ???????c v???n h??nh tri???n
                            khai nh???m ????p ???ng v???i s??? thay ?????i c???a th??? tr?????ng.
                        </p>
                        <h1 className="font-bold text-xl">
                            Haisan.online kh??c g?? so v???i c??c ????n v??? kinh doanh h???i s???n kh??c?
                        </h1>
                        <p>
                            Haisan.online l?? m???t th????ng hi???n trong l??nh v???c b??n l??? h???i s???n. Ch??ng t??i kh??ng s??? h???u b???t
                            k??? m???t c???a h??ng offline n??o tuy nhi??n ch??ng t??i l?? ????n v??? k???t n???i, h???p t??c t???t c??? c???a h??ng
                            h???i s???n ????? ph??n ph???i, giao h??ng ?????n kh??ch h??ng tr??n to??n qu???c d?????i m???t th????ng hi???u duy nh???t
                            haisan.online
                        </p>
                        <p>
                            Haisan.online ch??? tham gia v?? ch???u tr??ch nhi???m v??o m???t s??? c??ng ??o???n c???a chu k??? s???n ph???m, ????
                            l?? th???c hi???n ho???t ?????ng s??n l???c s???n ph???m, marketing, ph??n ph???i v?? ch??m s??c kh??ch h??ng. ????
                            c??ng ch??nh l?? c??c kh??u m???nh nh???t m?? BigTown Vi???t Nam c?? ???????c d???a tr??n kinh nghi???m ph??t tri???n
                            c??c th????ng hi???u kinh doanh tr??n to??n qu???c.
                        </p>
                        <p>
                            Nh?? t??n th????ng hi???u s???n ph???m haisan.online, ch??ng t??i s??? ch??? kinh doanh ????? h??i s???n tr??n n???n
                            t???ng online v?? s??? d???ng g???n 100% c??c k??nh Digital ????? th???c hi???n c??c chi???n d???ch marketing, x??y
                            d???ng th????ng hi???u v?? Ch??m s??c Kh??ch h??ng.
                        </p>
                        <h1 className="font-bold text-xl">Cam k???t v??? ch???t l?????ng s???n ph???m</h1>
                        <p>
                            Ch??ng t??i hi???u, ch???t l?????ng s???n ph???m quy???t ?????nh s???ng c??n ?????n s??? t???n t???i v?? ph??t tri???n c???a m???t
                            th????ng hi???u. Ch??nh v?? th??? c??c s???n ph???m h???i s???n c???a ch??ng t??i s??? ph???i ?????t ???????c c??c ti??u chu???n
                            ch???t l?????ng cao: ?????ng ?????u v??? size v?? ????? t????ng s???ng. C??c s???n ph???m ph???i c?? ngu???n g???c xu???t x??? r??
                            r??ng.
                        </p>
                        <p>
                            H??? th???ng c??c c???a h??ng h???i s???n li??n k???t r???ng kh???p cho ph??p ch??ng t??i tri???n khai d???ch v???
                            delivery nhanh, gi???m th???i gian giao h??ng ?????n tay kh??ch h??ng th???p nh???t. ?????m b???o s???n ph???m lu??n
                            t????i s???ng.
                        </p>
                        <p>
                            B??n c???nh ????, ch??nh s??ch ?????i tr??? h??ng h??a c??ng ???????c ??p d???ng. N???u c??c s???n ph???m kh??ng nh?? k???
                            v???ng, kh??ch h??ng c?? th??? ?????i tr??? d???a theo c??c ??i???u kho???n ???????c quy ?????nh c??? th??? trong ch??nh
                            s??ch c???a haisan.online.
                        </p>
                        <h1 className="font-bold text-xl">?????i ng?? s??ng l???p</h1>
                        <p>
                            Haisan.online l?? m???t th????ng hi???n ???????c th??nh l???p b???i 2 th??nh vi??n ch??? ch???t thu???c Cty TNHH
                            BigTown Vi???t Nam.
                        </p>
                        <h1 className="font-bold text-xl">Hi???u Nguy???n ??? CEO & Founder</h1>
                        <p>
                            T???t nghi???p th???c s??? Marketing t???i ?????i h???c Swinburne University of Technology. Hi???u Nguy???n v???
                            l??m vi???c cho m???t c??ng ty vi???n th??ng t???i Vi???t Nam v???i vai tr?? tr?????ng nh??m nghi??n c???u th???
                            tr?????ng v?? ph??t tri???n c??c s???n ph???m c??ng ngh??? m???i t???i c??ng ty. Sau h??n 5 n??m l??m vi???c t???i ????y,
                            anh r???i kh???i cty v?? b???t ?????u con ???????ng kh???i nghi???p ri??ng v?? th??nh l???p c??ng ty TNHH BigTown
                            Vi???t Nam.
                        </p>
                        <p>
                            Hi???u Nguy???n c?? kinh nghi???m ph??t tri???n c??c th????ng hi???u s???n ph???m ho???t ?????ng tr???i r???ng tr??n to??n
                            qu???c qua th????ng hi???u MOTOGO ??? d???ch v??? cho thu?? xe m??y chuy??n nghi???p to??n qu???c.
                        </p>
                        <p>
                            V???i th????ng hi???u haisan.online c??ng s??? ???????c k??? v???ng tr??? th??nh m???t th????ng hi???u s??? 1 trong l??nh
                            v???c b??n l??? h???i s???n online t???i Vi???t Nam.
                        </p>
                        <p>Li??n h???: Facebook ??? Linkedin ??? Pinterest ??? Instagram ??? Twitter</p>
                        <h1 className="font-bold text-xl">Linh Ph???m ??? COO</h1>
                        <p>
                            Linh Ph???m theo h???c chuy??n ng??nh H??? Th???ng Th??ng Tin t???i ?????i h???c C??ng Nghi???p H?? N???i. Gia nh???p
                            BigTown Vi???t Nam t??? nh???ng ng??y ?????u th??nh l???p, sau g???n 3 n??m Linh Ph???m ??ang ?????m nhi???m vai tr??
                            COO qu???n l?? v???n h??nh c??c m???ng d???ch v??? c???a c??ng ty. Ngo??i ra, Linh Ph???m c?? 2 n??m kinh nghi???m
                            tri???n khai n???i dung v?? x??y d???ng k??? ho???ch Marketing t???i c??ng ty.
                        </p>
                        <p>
                            L?? ng?????i tr??? theo l???i s???ng Eatclean v?? ??am m?? n???u n?????ng t??m hi???u th???c ph???m dinh d?????ng, Linh
                            Ph???m ?????ng s??ng l???p v?? tham gia d??? ??n haisan.online ngay t??? nh???ng ng??y ?????u h??nh th??nh ??
                            t?????ng. C?? ch???u tr??ch nhi???m ki???m so??t, qu???n l?? x??y d???ng ?????i ng?? Marketing tri???n khai d??? ??n.
                            Nh???m ?????m b???o th??ng tin s???n ph???m c??ng ki???n th???c mang ?????n cho ng?????i d??ng ch??nh x??c, ch??n th???c
                            nh???t.
                        </p>
                        <p>Li??n h???: Facebook ??? Linkedin ??? Pinterest ??? Instagram ??? Twitter</p>
                        <h1 className="font-bold text-xl">S??? m???nh</h1>
                        <p>
                            S??? m???nh c???a ch??ng t??i l?? x??y d???ng haisan.online tr??? th??nh m???t k??nh b??n l??? h???i s???n online l???n
                            nh???t Vi???t Nam. Gi??p cho c??c c???a h??ng ????n v??? b??n l??? h???i s???n kh??ng c?? kinh nghi???m tri???n khai
                            c??c k??nh b??n h??ng tr???c tuy???n kinh doanh c?? l???i nhu???n tr??n n???n t???ng s???. S??? h??a c??c ho???t ?????ng
                            trong v???n h??nh trong c??c c???a h??ng, ?????ng b???, k???t n???i c??c d??? li???u c???a h??ng gi??p cho ho???t ?????ng
                            kinh doanh ???????c t???i ??u h??a. ????a s???n ph???m h???i s???n ti???p c???n v???i ???????c v???i ?????i ??a s??? ng?????i d??n
                            d??? d??ng h??n qua k??nh ph??n ph???i v?? gi?? th??nh s???n ph???m.
                        </p>
                        <h1 className="font-bold text-xl">T???m nh??n</h1>
                        <p>
                            Trong 3 n??m t???i haisan.online s??? tr??? th??nh k??nh b??n l??? h???i s???n online l???n nh???t Vi???t Nam. C??
                            m???ng l?????i c???a h??ng li??n k???t ph??? r???ng h???u h???t c??c th??nh ph??? l???n.
                            <br />
                            L?? k??nh b??n l??? s???n h???i s???n s??? 1 tr??n n???n t???ng website v?? n???n t???ng m???ng x?? h???i.
                        </p>
                        <h1 className="font-bold text-xl">Th??ng tin li??n h???</h1>
                        <p>
                            Haisan.online ??? K??nh b??n l??? h???i s???n online l???n nh???t Vi???t Nam
                            <br />
                            ??i???n tho???i: 0355 370 347
                            <br />
                            Email: haisan.online2022@gmail.com
                            <br />
                            ?????a ch???: 20 ng?? 28 Nguy???n Kh??? Tr???c, Mai D???ch, C???u Gi???y, H?? N???i
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
                                <li className="text-blue-800 font-bold p-2 text-lg border-b-2">V??? ch??ng t??i</li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/policy" className="hover:underline hover:text-blue-400">
                                        Ch??nh s??ch mua s???
                                    </Link>
                                </li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/goodcook" className="hover:underline hover:text-blue-400">
                                        M??n ??n ngon
                                    </Link>
                                </li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/profile" className="hover:underline hover:text-blue-400">
                                        Th??ng tin doanh nghi???p
                                    </Link>
                                </li>
                                <li className="font-semibold text-base p-2 border-b border-dashed">
                                    <Link to="/interview" className="hover:underline">
                                        Tuy???n d???ng
                                    </Link>
                                </li>
                                <li className="font-semibold text-base p-2">
                                    <Link to="/contact" className="hover:underline hover:text-blue-400">
                                        Li??n h???
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
