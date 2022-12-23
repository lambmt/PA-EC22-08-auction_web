import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CategoryProduct.module.scss';


const cx = classNames.bind(styles);


function CategoryProduct() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Product Category</h3>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="beauty" id="beauty" className={cx('dot')} />
                        <div className={cx('name')}>Beauty</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="clothing accessories" id="clothing accessories" className={cx('dot')} />
                        <div className={cx('name')}>Clothing accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="pet" id="pet" className={cx('dot')} />
                        <div className={cx('name')}>Pet</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="jewelry" id="jewelry" className={cx('dot')} />
                        <div className={cx('name')}>Jewelry</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="food" id="food" className={cx('dot')} />
                        <div className={cx('name')}>Food</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="transport" id="transport" className={cx('dot')} />
                        <div className={cx('name')}>Transport</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="device" id="device" className={cx('dot')} />
                        <div className={cx('name')}>Device</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="furniture" id="furniture" className={cx('dot')} />
                        <div className={cx('name')}>Furniture</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
                <li className={cx('item')}>
                    <div to="" className={cx('link')}>
                        <input type="checkbox" name="art" id="art" className={cx('dot')} />
                        <div className={cx('name')}>Art</div>
                        <span className={cx('quantity')}>(19)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CategoryProduct;