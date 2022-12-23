import classNames from 'classnames/bind';
import styles from './SimilarProduct.module.scss';
import { Row, Col } from 'react-bootstrap';
import InfoProduct from '~/components/InfoProduct';
import config from '~/config';

import product1 from '~/assets/images/product1.jpg';
import product2 from '~/assets/images/product2.jpg';
import user from '~/assets/images/user.png';
import thumbnail1 from '~/assets/images/thumbnail1.jpg';
import thumbnail2 from '~/assets/images/thumbnail2.jpg';
import thumbnail3 from '~/assets/images/thumbnail3.jpg';

const cx = classNames.bind(styles);

function SimilarProduct({ data }) {
    var dataSimilar1 = {
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

    var dataSimilar2 = {
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
        <Row className={cx('row')}>
            <Col className={cx('col', 'l-3')}>
                <InfoProduct data={dataSimilar1} />
            </Col>
            <Col className={cx('col', 'l-3')}>
                <InfoProduct data={dataSimilar2} />
            </Col>
            <Col className={cx('col', 'l-3')}>
                <InfoProduct data={dataSimilar1} />
            </Col>
            <Col className={cx('col', 'l-3')}>
                <InfoProduct data={dataSimilar2} />
            </Col>
        </Row>
    );
}

export default SimilarProduct;
