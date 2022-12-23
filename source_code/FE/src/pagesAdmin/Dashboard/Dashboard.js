import classNames from "classnames/bind";
import styles from './Dashboard.module.scss';
import Confirm from "./Confirm";


const cx = classNames.bind(styles);

function Dashboard() {


    var datas = [
        {
            id: 12345,
            shopName: 'Nghia',
            productName: 'Product',
            startBid: 69,
        },
        {
            id: 12345,
            shopName: 'Nghia',
            productName: 'Product',
            startBid: 69,
        },
        {
            id: 12345,
            shopName: 'Nghia',
            productName: 'Product',
            startBid: 69,
        },
        {
            id: 12345,
            shopName: 'Nghia',
            productName: 'Product',
            startBid: 69,
        },
    ];


    return (
        <div className={cx('wrapper')}>
            <div className={cx('quantity')}>
                <div className={cx('wrapper-one')}>
                    <div className={cx('label')}>New Users</div>
                    <div className={cx('data')}>65,650</div>
                </div>
                <div className={cx('wrapper-one')}>
                    <div className={cx('label')}>New Vendor</div>
                    <div className={cx('data')}>65,650</div>
                </div>
                <div className={cx('wrapper-one')}>
                    <div className={cx('label')}>New Auction</div>
                    <div className={cx('data')}>65,650</div>
                </div>
                <div className={cx('wrapper-one')}>
                    <div className={cx('label')}>Auction Confirm</div>
                    <div className={cx('data')}>65,650</div>
                </div>
            </div>
            <Confirm datas={datas} />
        </div>
    );
}

export default Dashboard;