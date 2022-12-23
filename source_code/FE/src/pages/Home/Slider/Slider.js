import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import './Slider.css';
import imgBanner from '~/assets/images/banner.jpg';
import imgBanner1 from '~/assets/images/banner1.jpg';
import imgBanner2 from '~/assets/images/banner2.jpg';
import imgBanner3 from '~/assets/images/banner3.jpg';
import imgBanner4 from '~/assets/images/banner4.jpg';
import imgBanner5 from '~/assets/images/banner5.jpg';
import { useRef, useEffect } from 'react';

import Banner from '~/components/Banner';

const cx = classNames.bind(styles);

function Slider() {
    const sliderMain = useRef();
    var btnDots = '';
    var setInter;

    var sliderWidth = 0;
    var sliderlength = 0;

    let pos = 0;
    let index = 0;

    var slideAuto;

    
    
    useEffect(() => {
        const sliderItems = document.querySelectorAll('.slider-item');
        btnDots = document.querySelectorAll('.dot');

        sliderWidth = sliderItems[0].offsetWidth;
        sliderlength = sliderItems.length;

        btnDots.forEach((btnDot, i) => {
            btnDot.onclick = () => {
                if (index !== i) {
                    clearInterval(slideAuto);
                    remove(btnDots[index]);
                    index = i;
                    add(btnDots[index]);
                    pos = (0 - sliderWidth) * i;
                    sliderMain.current.style = `transform: translateX(${pos}px)`;
                    slideAuto = setInterval(() => setInter(), 3000);
                }
            };
        });
    });

    slideAuto = setInterval(() => setInter(), 3000);

    setInter = () => {
        if (index === sliderlength - 1) {
            remove(btnDots[index]);
            index = 0;
            add(btnDots[index]);
            pos = 0;
            sliderMain.current.style = `transform: translateX(${pos}px)`;
        } else {
            handSlider(1);
        }
    };

    var Left = () => {
        if (index === 0) {
            clearInterval(slideAuto);
            remove(btnDots[index]);
            index = sliderlength - 1;
            add(btnDots[index]);
            pos = (0 - sliderWidth) * (sliderlength - 1);
            sliderMain.current.style = `transform: translateX(${pos}px)`;
            slideAuto = setInterval(() => setInter(), 3000);
        } else {
            clearInterval(slideAuto);
            handSlider(-1);
            slideAuto = setInterval(() => setInter(), 3000);
        }
    };

    var Right = () => {
        if (index === sliderlength - 1) {
            clearInterval(slideAuto);
            remove(btnDots[index]);
            index = 0;
            add(btnDots[index]);
            pos = 0;
            sliderMain.current.style = `transform: translateX(${pos}px)`;
            slideAuto = setInterval(() => setInter(), 3000);
        } else {
            clearInterval(slideAuto);
            handSlider(1);
            slideAuto = setInterval(() => setInter(), 3000);
        }
    };

    function handSlider(dec) {
        if (dec === -1) {
            if (index > 0) {
                pos = pos + sliderWidth;
                sliderMain.current.style = `transform: translateX(${pos}px)`;
                remove(btnDots[index]);
                index--;
                add(btnDots[index]);
            }
        } else if (dec === 1) {
            if (index < sliderlength - 1) {
                pos = pos - sliderWidth;
                sliderMain.current.style = `transform: translateX(${pos}px)`;
                remove(btnDots[index]);
                index++;
                add(btnDots[index]);
            }
        }
    }

    var add = (element) => {
        element.style.border = '1px solid #fff';
        element.style.backgroundColor = 'transparent';
        element.style.textShadow = '0px 0px 2px #000';
        element.style.cursor = 'default';
        element.style.transform = 'scale(1.8)';
        element.style.padding = '3px';
    };

    var remove = (element) => {
        element.style.border = 'none';
        element.style.backgroundColor = '#fff';
        element.style.textShadow = '0px 0px 2px #000';
        element.style.cursor = 'pointer';
        element.style.transform = 'scale(1)';
        element.style.padding = '4px';
        element.style.borderRadius = '50%';
    };

    return (
        <div className={cx('wrapper-slider')}>
            <div onClick={Left} className={cx('btn-left')}>
                <i class="fa-solid fa-chevron-left"></i>
            </div>

            <div className={cx('slider')}>
                <div ref={sliderMain} className={cx('banner-all')}>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="68" priceMax="2000" to="" src={imgBanner} />
                    </div>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="50" priceMax="3000" to="" src={imgBanner1} />
                    </div>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="40" priceMax="4000" to="" src={imgBanner2} />
                    </div>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="20" priceMax="1000" to="" src={imgBanner3} />
                    </div>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="25" priceMax="5000" to="" src={imgBanner4} />
                    </div>
                    <div class="slider-item">
                        <Banner name="Product default" priceMin="10" priceMax="8000" to="" src={imgBanner5} />
                    </div>
                </div>
            </div>

            <ul class="dots">
                <li class='dot active'></li>
                <li class='dot '></li>
                <li class='dot '></li>
                <li class='dot '></li>
                <li class='dot '></li>
                <li class='dot '></li>
            </ul>

            <div onClick={Right} className={cx('btn-right')}>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
}

export default Slider;
