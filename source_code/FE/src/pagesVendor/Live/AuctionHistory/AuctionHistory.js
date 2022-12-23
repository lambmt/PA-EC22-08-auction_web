import classNames from 'classnames/bind';
import styles from './AuctionHistory.module.scss';


const cx = classNames.bind(styles);

function AuctionHistory({ id }) {

    var datas = [
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
        {
            date: 'December 9, 2022 20:18',
            bid: '120',
            user: 'Nghiant10',
        },
    ];


    return (
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
        </table>
    );
}

export default AuctionHistory;