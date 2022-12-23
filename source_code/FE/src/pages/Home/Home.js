import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import config from '~/config';

import Slider from './Slider';
import LiveAuction from './LiveAuction';
import BannerCondition from './BannerCondition';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function Home() {
    return (
        <div className={cx('container')}>
            <Slider />
            <BannerCondition />
            <LiveAuction />

            <div className={cx('view-all')}>
                <Link to={config.routes.product} className={cx('to')}>View All</Link>
            </div>
        </div>
    );
}

export default Home;
