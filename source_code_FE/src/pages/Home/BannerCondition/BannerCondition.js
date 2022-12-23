import classNames from 'classnames/bind';
import styles from './BannerCondition.module.scss';
import config from '~/config';

import banner1 from '~/assets/images/bannerCondition1.jpg';
import banner2 from '~/assets/images/bannerCondition2.jpg';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function BannerCondition() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('new')}>
                    <img src={banner1} alt="New Product" />
                    <div className={cx('text')}>
                        <div className={cx('title')}>NEW PRODUCT</div>
                        <div className={cx('quantity')}>29 Auctions</div>
                        <Link to={config.routes.detailProduct}><button className={cx('btn')}>view more</button></Link>
                    </div>
                </div>

                <div className={cx('used')}>
                    <img src={banner2} alt="Used Product" />
                    <div className={cx('text')}>
                        <div className={cx('title')}>USED PRODUCT</div>
                        <div className={cx('quantity')}>29 Auctions</div>
                        <Link to={config.routes.detailProduct}><button className={cx('btn')}>view more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerCondition;