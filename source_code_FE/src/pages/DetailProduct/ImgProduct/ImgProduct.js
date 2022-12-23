import classNames from 'classnames/bind';
import { Col, Row } from 'react-bootstrap';
import styles from './ImgProduct.module.scss';

import { useRef, useEffect } from 'react';
import './ImgProduct.css';

const cx = classNames.bind(styles);

function ImgProduct({ data }) {
    const sliderMain = useRef();
    const active = useRef();
    var btnDots = '';

    var sliderWidth = 0;

    let pos = 0;
    let index = 0;

    
    
    useEffect(() => {
        const sliderItems = document.querySelectorAll('.slider');
        btnDots = document.querySelectorAll('.thumbnail');

        btnDots[index].style.border = '1.5px solid var(--primary-color)';
        sliderWidth = sliderItems[0].offsetWidth;

        btnDots.forEach((btnDot, i) => {
            btnDot.onclick = () => {
                if (index !== i) {
                    btnDots[index].style.border = 'none';
                    index = i;
                    btnDots[index].style.border = '1.5px solid var(--primary-color)';
                    pos = (0 - sliderWidth) * i;
                    sliderMain.current.style = `transform: translateX(${pos}px)`;
                    active.current.style.left = `${i*25}%`;
                }
            };
        });
    });


    return (
        <Row className={cx('row')}>
            <Col className={cx('col', 'l-2')}>
                <div class='wrapper-thumbnail'>
                    <img src={data.img} alt={data.name} class="thumbnail" />
                    <img src={data.thumbnail1} alt={data.name} class="thumbnail" />
                    <img src={data.thumbnail2} alt={data.name} class="thumbnail" />
                    <img src={data.thumbnail3} alt={data.name} class="thumbnail" />
                </div>
            </Col>
            <Col className={cx('col', 'l-10')}>
                <div className={cx('wrapper')}>
                    <div ref={sliderMain} className={cx('detail-slider')}>
                        <img src={data.img} alt={data.name} class="slider" />
                        <img src={data.thumbnail1} alt={data.name} class="slider" />
                        <img src={data.thumbnail2} alt={data.name} class="slider" />
                        <img src={data.thumbnail3} alt={data.name} class="slider" />
                    </div>
                </div>

                <div className={cx('scroll-bar')}>
                    <div ref={active} className={cx('active')}></div>
                </div>
            </Col>
        </Row>
    );
}

export default ImgProduct;