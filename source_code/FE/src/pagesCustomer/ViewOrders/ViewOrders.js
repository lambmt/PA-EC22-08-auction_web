import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import styles from './ViewOrders.module.scss';


const cx = classNames.bind(styles);

function ViewOrders() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>View Order</h2>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-6')}>
                        <div className={cx('wrapper-col')}>
                            <div className={cx('head')}>Order Details</div>
                            <Row className={cx('row-detail')}>
                                <Col className={cx('col', 'l-6')}>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>order number</div>
                                        <div className={cx('result')}>1234567890</div>
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>email</div>
                                        <div className={cx('result')}>nghiant@gmail.com</div>
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>payment method</div>
                                        <div className={cx('result')}>Mastercard0123456789</div>
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>order date</div>
                                        <div className={cx('result')}>October 8, 2022</div>
                                    </div>
                                </Col>
                                <Col className={cx('col', 'l6')}>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>delivery options</div>
                                        <div className={cx('result')}>Standard delivery</div>
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>delivery address</div>
                                        <div className={cx('result')}>So 1, Vo Van Ngan, Linh Chieu, Thu Duc, Tp.Thu Duc, Tp.Ho Chi Minh</div>
                                    </div>
                                    <div className={cx('wrapper-info')}>
                                        <div className={cx('label')}>contact number</div>
                                        <div className={cx('result')}>+84 0999999999</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className={cx('col', 'l-6')}>
                        <div className={cx('wrapper-col')}>
                            <div className={cx('head')}>Order Summary</div>
                            <div className={cx('summary')}>
                                <div className={cx('wrapper-summary', 'bor-sum')}>
                                    <div className={cx('name')}>PRODUCT</div>
                                    <div className={cx('price-title')}>PRICE</div>
                                </div>
                                <div className={cx('wrapper-summary-product', 'bor-sum')}>
                                    <div className={cx('name')}>Lira Earrings</div>
                                    <div className={cx('price')}>$64</div>
                                </div>
                                <div className={cx('wrapper-summary', 'bor-sum')}>
                                    <div className={cx('name')}>SUBTOTAL</div>
                                    <div className={cx('price')}>$64</div>
                                </div>
                                <div className={cx('wrapper-summary', 'bor-sum')}>
                                    <div className={cx('name')}>SHIPPING</div>
                                    <div className={cx('price')}>Free shipping</div>
                                </div>
                                <div className={cx('wrapper-summary-total', 'bor-sum')}>
                                    <div className={cx('name')}>TOTAL</div>
                                    <div className={cx('price')}>$64</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ViewOrders;