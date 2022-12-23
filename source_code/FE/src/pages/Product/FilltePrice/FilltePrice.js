import classNames from 'classnames/bind';
import styles from './FilltePrice.module.scss';

import { useRef, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function FilltePrice() {

    const priceMin = useRef();
    const priceMax = useRef();
    const rangeSlider = useRef();
    const rangeMin = useRef();
    const rangeMax = useRef();

    const [valueMin, setValueMin] = useState(0);
    const [valueMax, setValueMax] = useState(10000);

    const [priceMinText, setPriceMinText] = useState(0);
    const [priceMaxText, setPriceMaxText] = useState(10000);

    var limitPrice = 1000;
    var handleMin = () => {
        if(valueMax - valueMin < limitPrice) {
            setValueMin(priceMinText);
            setValueMax(priceMaxText);
        }
        else {
            setPriceMinText(`${valueMin}`);
            rangeSlider.current.style.left = `${valueMin/100}%`;
        }
    }

    var handleMax = () => {
        if(valueMax - valueMin < limitPrice) {
            setValueMin(priceMinText);
            setValueMax(priceMaxText);
        }
        else {
            setPriceMaxText(`${valueMax}`);
            rangeSlider.current.style.right = `${100 - (valueMax/100)}%`;
        }
    }


    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Fillter by rice</h3>

            <div className={cx("range")}>
                <div ref={rangeSlider} className={cx("range-price")}></div>
                <input onInput={e => {setValueMin(e.target.value); handleMin()}} ref={rangeMin} type="range" className={cx("range-min")} min="0" max="10000" value={valueMin} />
                <input onInput={e => {setValueMax(e.target.value); handleMax()}} ref={rangeMax} type="range" className={cx("range-max")} min="0" max="10000" value={valueMax} />
            </div>
            
            <div className={cx("price")}>
                <p ref={priceMin} className={cx("min")}>{priceMinText} $</p>
                <i class="fa-solid fa-right-long"></i>
                <p ref={priceMax} className={cx("max")}>{priceMaxText} $</p>
            </div>

        </div>
    );
}

export default FilltePrice;