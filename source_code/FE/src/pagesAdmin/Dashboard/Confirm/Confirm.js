import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Confirm.module.scss';
import config from "~/config";


const cx = classNames.bind(styles);

function Confirm({ datas }) {


    return (
        <table width='100%' className={cx('table')}>
            <tr height="80" className={cx('head')}>
                <th align="start" className={cx('th')} width='16.666667%'>ID</th>
                <th align="start" className={cx('th')} width='16.666667%'>Shop Name</th>
                <th align="start" className={cx('th')} width='16.666667%'>Product Name</th>
                <th align="start" className={cx('th')} width='16.666667%'>Start Bid</th>
                <th align="start" className={cx('th')} width='16.666667%'>Confirm</th>
                <th align="start" className={cx('th')} width='16.666667%'></th>
            </tr>
            {
                datas.map((data, index) => {
                    return <tr key={index} height="60" className={cx('row')}>
                        <td align="start">{data.id}</td>
                        <td align="start">{data.shopName}</td>
                        <td align="start">{data.productName}</td>
                        <td align="start">$ {data.startBid}</td>
                        <td align="start">
                            <div className={cx('wrapper-confirm')}>
                                <button className={cx('delete')}><i class="fa-solid fa-xmark"></i></button>
                                <button className={cx('success')}><i class="fa-solid fa-check"></i></button>
                            </div>
                        </td>
                        <td align="start">
                            <Link to={config.routes.adminViewAuction} className={cx('link')}>View Auction</Link>
                        </td>
                    </tr>
                })
            }
        </table>
    );
}

export default Confirm;