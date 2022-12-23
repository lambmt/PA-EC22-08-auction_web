import classNames from "classnames/bind";
import styles from './AuctionHistory.module.scss';


const cx = classNames.bind(styles);

function AuctionHistory({ id }) {

    var datas = [
        {
            date: 'December 9, 2022 20:18',
            bid: '110',
            user: 'Nghiant10',
        },
        {
            date: 'December 9, 2022 20:18',
            bid: '120',
            user: 'Nghiant10',
        },
        {
            date: 'December 9, 2022 20:18',
            bid: '120',
            user: 'Nghiant10',
        },
        {
            date: 'December 9, 2022 20:18',
            bid: '120',
            user: 'Nghiant10',
        },
    ];

    var dataMyBid = {
        date: 'December 9, 2022 20:18',
        bid: '120',
        user: 'My Bid',
    }

    var statusAuction = dataMyBid.bid > datas[0].bid;


    return (
        <div>
            <table bgcolor="#d5d0e4" height="350" width="500" className={cx('table')}>
                <div className={cx('line')}></div>
                <tr height="20%">
                    <th width="50%">Date</th>
                    <th width="20%">Bid</th>
                    <th width="30%">User</th>
                </tr>
                {
                    datas.map((data, index) => {
                        return <tr>
                            <td align="center">{data.date}</td>
                            <td align="center">{data.bid}</td>
                            <td align="center">{data.user}</td>
                        </tr>
                    })
                }
                <tr bgcolor="rgb(4, 93, 121)" className={cx('my-bid')}>
                    <td className={cx('color-w')} align="center">{dataMyBid.date}</td>
                    <td className={cx('color-w')} align="center">{dataMyBid.bid}</td>
                    <td className={cx('my-bid-user', 'color-w')} align="center">{dataMyBid.user}</td>
                </tr>
            </table>
            {
                statusAuction ? 
                <div className={cx('status', 'largest')}>The auction price is the largest</div> :
                <div className={cx('status', 'more')}>Have been auctioned more than</div>
            }
        </div>
    );
}

export default AuctionHistory;