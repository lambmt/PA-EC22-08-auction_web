import classNames from 'classnames/bind';
import styles from './ProductWaitConfirmation.module.scss';


const cx = classNames.bind(styles);

function ProductWaitConfirmation({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('img')}>
                    <img src={data.img} alt={data.name} />
                </div>
            </div>

            <div className={cx('info')}>
                <div className={cx('name-name')}>{data.name}</div>
                <div className={cx('start-bid')}>Start Bid: <p>${data.startBid}.00</p></div>
                <div className={cx('step-price')}>Step Price: <p>${data.stepPrice}</p></div>
                <div className={cx('item-condition')}>Item Condition: <p>{data.condition}</p></div>
                <div className={cx('auction-ends')}>Auction Ends: <span>{data.auctionEnds}</span></div>
            </div>

            <div className={cx('sender')}>
                <img src={data.avatarSender} alt={data.nameSender} className={cx('avatar')} />
                <div className={cx('name-sender')}>{data.nameSender}</div>
            </div>

        </div>
    );
}

export default ProductWaitConfirmation;