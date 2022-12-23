import classNames from 'classnames/bind';
import styles from './SearchProduct.module.scss';


const cx = classNames.bind(styles);

function SearchProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-input')}>
                <input id="search" type="text" className={cx('input')} placeholder="Search..." />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default SearchProduct;