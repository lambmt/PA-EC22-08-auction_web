import classNames from "classnames/bind";
import styles from './ViewAuction.module.scss';


import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '~/config';

import ImgProduct from './ImgProduct';
import DataProduct from './DataProduct';

import product2 from '~/assets/images/product2.jpg';
import thumbnail1 from '~/assets/images/thumbnail1.jpg';
import thumbnail2 from '~/assets/images/thumbnail2.jpg';
import thumbnail3 from '~/assets/images/thumbnail3.jpg';
import avatar from '~/assets/images/admin.png';


const cx = classNames.bind(styles);

function ViewAuction() {

    var data = {
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
    };

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-6')}>
                        <ImgProduct data={data} />
                    </Col>
                    <Col className={cx('col', 'l-6')}>
                        <div className={cx('shop')}>
                            <div className={cx('avatar')}>
                                <img alt="avatar" src={avatar} />
                            </div>
                            <div className={cx('name')}>Name Shop</div>
                        </div>
                        <DataProduct data={data} />

                        <div className={cx('wrapper-confirm')}>
                            <button className={cx('delete')}><i class="fa-solid fa-check"></i></button>
                            <button className={cx('success')}><i class="fa-solid fa-minus"></i></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ViewAuction;