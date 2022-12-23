import classNames from "classnames/bind";
import styles from './HeaderAdmin.module.scss';


const cx = classNames.bind(styles);

function HeaderAdmin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('message')}>
                <i class="fa-solid fa-message"></i>
            </div>
            <div className={cx('bell')}>
                <i class="fa-solid fa-bell"></i>
            </div>
        </div>
    );
}

export default HeaderAdmin;