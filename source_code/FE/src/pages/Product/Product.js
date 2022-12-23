import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Product.module.scss';

import AllProduct from './AllProduct';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);


function Product() {
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


    const [search, setSearch] = useState("");

    const [beauty, setBeauty] = useState(false);
    const [clothing, setClothing] = useState(false);
    const [pet, setPet] = useState(false);
    const [jewelry, setJewelry] = useState(false);
    const [food, setFood] = useState(false);
    const [transpost, setTranspost] = useState(false);
    const [device, setDevice] = useState(false);
    const [furniture, setFurniture] = useState(false);
    const [art, setArt] = useState(false);


    useEffect(() => {
        console.log(search);

        console.log(beauty);
        console.log(clothing);
        console.log(pet);
        console.log(jewelry);
        console.log(food);
        console.log(transpost);
        console.log(device);
        console.log(furniture);
        console.log(art);

        console.log(priceMinText);
        console.log(priceMaxText);

    })


    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>All Product</h2>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-3')}>


                        
                        <div className={cx('wrapper-se')}>
                            <div className={cx('wrapper-input-se')}>
                                <input value={search.trimStart()} onChange={(e) => setSearch(e.target.value)} id="search" type="text" className={cx('input-se')} placeholder="Search..." />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>


                        <div className={cx('wrapper-ca')}>
                            <h3 className={cx('title-ca')}>Product Category</h3>
                            <ul className={cx('list-ca')}>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setBeauty(e.target.checked)} checked={beauty} type="checkbox" name="beauty" id="beauty" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Beauty</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setClothing(e.target.checked)} checked={clothing} type="checkbox" name="clothing accessories" id="clothing accessories" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Clothing accessories</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setPet(e.target.checked)} checked={pet} type="checkbox" name="pet" id="pet" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Pet</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setJewelry(e.target.checked)} checked={jewelry} type="checkbox" name="jewelry" id="jewelry" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Jewelry</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setFood(e.target.checked)} checked={food} type="checkbox" name="food" id="food" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Food</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setTranspost(e.target.checked)} checked={transpost} type="checkbox" name="transpost" id="transpost" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Transpost</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setDevice(e.target.checked)} checked={device} type="checkbox" name="device" id="device" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Device</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setFurniture(e.target.checked)} checked={furniture} type="checkbox" name="furniture" id="furniture" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Furniture</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                                <li className={cx('item-ca')}>
                                    <div to="" className={cx('link-ca')}>
                                        <input onChange={(e) => setArt(e.target.checked)} checked={art} type="checkbox" name="art" id="art" className={cx('dot-ca')} />
                                        <div className={cx('name-ca')}>Art</div>
                                        <span className={cx('quantity-ca')}>(19)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>



                        <div className={cx('wrapper-fi')}>
                            <h3 className={cx('title-fi')}>Fillter by rice</h3>

                            <div className={cx("range-fi")}>
                                <div ref={rangeSlider} className={cx("range-price-fi")}></div>
                                <input onInput={e => {setValueMin(e.target.value); handleMin()}} ref={rangeMin} type="range" className={cx("range-min-fi")} min="0" max="10000" value={valueMin} />
                                <input onInput={e => {setValueMax(e.target.value); handleMax()}} ref={rangeMax} type="range" className={cx("range-max-fi")} min="0" max="10000" value={valueMax} />
                            </div>
                            
                            <div className={cx("price-fi")}>
                                <p ref={priceMin} className={cx("min-fi")}>{priceMinText} $</p>
                                <i class="fa-solid fa-right-long"></i>
                                <p ref={priceMax} className={cx("max-fi")}>{priceMaxText} $</p>
                            </div>

                        </div>



                    </Col>
                    <Col className={cx('col', 'l-9')}>
                        <AllProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Product;