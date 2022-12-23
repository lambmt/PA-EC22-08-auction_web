import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/Components/Header';
import Footer from '~/layouts/Components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className={cx('container')}>
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;