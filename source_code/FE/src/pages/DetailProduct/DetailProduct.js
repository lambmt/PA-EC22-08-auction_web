import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '~/config';

import ImgProduct from './ImgProduct';
import DataProduct from './DataProduct';
import DescriptionProduct from './DescriptionProduct';
import SimilarProduct from './SimilarProduct';

import product2 from '~/assets/images/product2.jpg';
import thumbnail1 from '~/assets/images/thumbnail1.jpg';
import thumbnail2 from '~/assets/images/thumbnail2.jpg';
import thumbnail3 from '~/assets/images/thumbnail3.jpg';

const cx = classNames.bind(styles);

function DetailProduct() {

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
                        <DataProduct data={data} />
                    </Col>
                </Row>

                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-12')}>
                        <DescriptionProduct data={data} />
                    </Col>
                </Row>

                <div className={cx('title')}>Similar Items</div>
                <SimilarProduct data={data} />
            </Container>

            <div className={cx('view-all')}>
                <Link to={config.routes.product} className={cx('to')}>View All</Link>
            </div>
        </div>
    );
}

export default DetailProduct;