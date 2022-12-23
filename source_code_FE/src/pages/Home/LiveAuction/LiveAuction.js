import classNames from "classnames/bind";
import styles from './LiveAuction.module.scss';
import InfoProduct from "~/components/InfoProduct";

import product1 from "~/assets/images/product1.jpg";
import product2 from "~/assets/images/product2.jpg";
import user from "~/assets/images/user.png";
import thumbnail1 from '~/assets/images/thumbnail1.jpg';
import thumbnail2 from '~/assets/images/thumbnail2.jpg';
import thumbnail3 from '~/assets/images/thumbnail3.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);


function LiveAuction() {

    var data = {
        id: 1,
        img: product1,
        thumbnail1: thumbnail1,
        thumbnail2: thumbnail2,
        thumbnail3: thumbnail3,
        name: 'Name product',
        startBid: 150,
        condition: 'USED',
        auctionEnds: 'January 31, 2023 12:00:00',
        timeLeft: '',
        currentBid: 231,
        stepPrice: 5,
        description: '',
        avatarSender: user,
        nameSender: 'Name sender',
    };

    var data1 = {
        id: 1,
        img: product2,
        thumbnail1: thumbnail1,
        thumbnail2: thumbnail2,
        thumbnail3: thumbnail3,
        name: 'Name product',
        startBid: 150,
        condition: 'USED',
        auctionEnds: 'January 10, 2023 23:59:30',
        timeLeft: '',
        currentBid: 231,
        stepPrice: 5,
        description: '',
        avatarSender: user,
        nameSender: 'Name sender',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('text-header')}>
                <div className={cx('title')}>latest auctions</div>
                <i class="fa-sharp fa-solid fa-gavel"></i>
            </div>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-3')}>
                        <InfoProduct data={data} />
                    </Col>
                    <Col className={cx('col', 'l-3')}>
                        <InfoProduct data={data1} />
                    </Col>
                    <Col className={cx('col', 'l-3')}>
                        <InfoProduct data={data} />
                    </Col>
                    <Col className={cx('col', 'l-3')}>
                        <InfoProduct data={data1} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LiveAuction;