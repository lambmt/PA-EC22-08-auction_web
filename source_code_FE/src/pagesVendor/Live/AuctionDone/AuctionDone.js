import classNames from "classnames/bind";
import styles from './AuctionDone.module.scss';
import { Link } from "react-router-dom";
import config from "~/config";


const cx = classNames.bind(styles);

function AuctionDon() {
    
    var datas = [
        {
            id: 1234567890,
            nameProduct: 'Name Product',
            nameAuctioneer: null,
            price: null,
            status: false,
        },
        {
            id: 1234567890,
            nameProduct: 'Name Product',
            nameAuctioneer: null,
            price: null,
            status: false,
        },
        {
            id: 1234567890,
            nameProduct: 'Name Product',
            nameAuctioneer: "Name Auctioneer",
            price: 500,
            status: true,
        },
        {
            id: 1234567890,
            nameProduct: 'Name Product',
            nameAuctioneer: "Name Auctioneer",
            price: 500,
            status: true,
        },
    ]

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Auction Done</div>
            <table className={cx('table')}>
                <tr height="90" className={cx('head')}>
                    <th align="start" width="15%">ID</th>
                    <th align="start" width="20%">Name Product</th>
                    <th align="start" width="20%">Name Auctioneer</th>
                    <th align="start" width="15%">Price</th>
                    <th align="start" width="15%">Status</th>
                    <th align="start" width="15%">Confirm Order</th>
                </tr>

                {
                    datas.map((data, index) => 
                        <tr key={index} height="70" className={cx('row')}>
                            <td align="start">{data.id}</td>
                            <td align="start">{data.nameProduct}</td>
                            <td align="start">{data.nameAuctioneer || "###"}</td>
                            <td align="start">{data.price !== null ? `$ ${data.price}` : "###"}</td>
                            <td align="start">
                                {
                                    data.status === true ?
                                    <div className={cx("status-success")}>Successful</div> :
                                    <div className={cx("status-fail")}>Failed</div>
                                }
                            </td>
                            {
                                data.status === true ?
                                <td align="start">
                                    <div className={cx('wrapper-confirm')}>
                                        <button className={cx('success')}><i class="fa-solid fa-check"></i></button>
                                        <button className={cx('delete')}><i class="fa-solid fa-minus"></i></button>
                                    </div>
                                </td> :
                                <td>
                                    <Link className={cx('link-repost')} to={config.routes.vendorAdd}>Repost Auction</Link>
                                </td>
                            }
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default AuctionDon;