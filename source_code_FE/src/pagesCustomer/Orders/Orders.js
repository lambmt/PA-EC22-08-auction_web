import classNames from "classnames/bind";
import styles from './Orders.module.scss';
import { Link } from "react-router-dom";
import config from "~/config";


const cx = classNames.bind(styles);

function Orders() {

    var datas = [
        {
            id: 1234567890,
            date: 'October 8, 2022',
            status: 'Delivered',
            total: 105,
        },
        {
            id: 6789012345,
            date: 'October 9, 2022',
            status: 'Processing',
            total: 500,
        },
        {
            id: 8901234567,
            date: 'October 10, 2022',
            status: 'Delivered',
            total: 45,
        },
        {
            id: 3456789012,
            date: 'October 11, 2022',
            status: 'Processing',
            total: 269,
        },
    ]


    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                <tr height="90" className={cx('head')}>
                    <th align="start" width="20%">ORDER NUMBER</th>
                    <th align="start" width="20%">DATE</th>
                    <th align="start" width="15%">STATUS</th>
                    <th align="start" width="15%">TOTAL</th>
                    <th align="start" width="15%">ACTIONS</th>
                    <th align="start" width="15%">Confirm Order</th>
                </tr>

                {
                    datas.map((data, index) => 
                        <tr key={index} height="70" className={cx('row')}>
                            <td align="start">{data.id}</td>
                            <td align="start">{data.date}</td>
                            <td align="start">{data.status}</td>
                            <td align="start">$ {data.total}</td>
                            <td align="start">
                                <Link to={config.routes.customerViewOrder} className={cx('link')}>View Order</Link>
                            </td>
                            {
                                data.status === 'Processing' ?
                                <td align="start">
                                    <div className={cx('wrapper-confirm')}>
                                        <button className={cx('success')}><i class="fa-solid fa-check"></i></button>
                                        <button className={cx('delete')}><i class="fa-solid fa-minus"></i></button>
                                    </div>
                                </td> : ""
                            }
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default Orders;