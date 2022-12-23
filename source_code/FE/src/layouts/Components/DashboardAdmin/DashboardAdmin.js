import classNames from "classnames/bind";
import styles from './DashboardAdmin.module.scss';

import logo from "~/assets/images/logo-admin.png";
import avatar from "~/assets/images/admin.png";
import { Link, NavLink } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function DashboardAdmin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img alt="logo" src={logo} />
            </div>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <img alt="logo" src={avatar} />
                </div>
                <div className={cx('name')}>Tan Nghia</div>
                <div className={cx('description')}>Super Admin</div>
            </div>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <NavLink className={(active) => cx('item-link', {active: active.isActive})} to={config.routes.adminDashboard}>Dashboard</NavLink>
                </li>
                <li className={cx('item')}>
                    <NavLink className={(active) => cx('item-link', {active: active.isActive})} to={config.routes.adminListAccount}>User List</NavLink>
                </li>
            </ul>
            <div className={cx('btn')}>
                <button>Log Out</button>
            </div>
        </div>
    );
}

export default DashboardAdmin;