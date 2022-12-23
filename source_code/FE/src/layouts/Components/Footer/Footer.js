import classNames from "classnames/bind";
import styles from "./Footer.module.scss"


const cx = classNames.bind(styles);


function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('contact')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>contact</li>
                        <li className={cx('item')}>auction guideide</li>
                        <li className={cx('item')}>shipping and returns</li>
                    </ul>

                    <div className={cx('feedback')}>
                        <div className={cx('wrapper-input')}>
                            <input type="text" className={cx('input')} placeholder="Give an email, get the newsletter." />
                            <div className={cx('icon')}><i class="fa-solid fa-right-long"></i></div>
                        </div>
                        <div className={cx('line')}></div>
                    </div>
                </div>

                <div className={cx('social-network')}>
                    <div className={cx('by')}>© 2022 by @ngtn</div>

                    <ul className={cx('app-list')}>
                        <li className={cx('app-item')}><i class="fa-brands fa-linkedin-in"></i></li>
                        <li className={cx('app-item')}><i class="fa-brands fa-facebook-f"></i></li>
                        <li className={cx('app-item')}><i class="fa-brands fa-instagram"></i></li>
                        <li className={cx('app-item')}><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;