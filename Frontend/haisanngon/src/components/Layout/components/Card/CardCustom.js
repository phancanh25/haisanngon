import { Card } from 'flowbite-react';
// import classNames from 'classnames';
// const cx = classNames.bind();
const price = 450;
const unit = 'kg';
function CardCustom() {
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series"
                imgSrc="https://haisan.online/wp-content/uploads/2022/01/tom-the-chan-trang-4.jpg"
            >
                <a href="!#">
                    <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {price},000đ/{unit}
                    </span>
                </div>
            </Card>
        </div>
    );
}
export default CardCustom;
