import classNames from "classnames/bind";
import styles from './DefautLayoutAdmin.module.scss';

import DashboardAdmin from "~/layouts/Components/DashboardAdmin";
import HeaderAdmin from "~/layouts/Components/HeaderAdmin";


const cx = classNames.bind(styles);

function DefautLayoutAdmin({ children }) {
    return (
        <div>
            <DashboardAdmin />

            <div className={cx('container')}>
                <HeaderAdmin />

                <div className={cx('wrapper-children')}>
                    { children }
                </div>
            </div>
        </div>
    );
}

export default DefautLayoutAdmin;