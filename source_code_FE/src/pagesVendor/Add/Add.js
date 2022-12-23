import classNames from "classnames/bind";
import styles from './Add.module.scss';

import { useRef, useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Add() {

    var imageMain = useRef();
    var thumbnail1 = useRef();
    var thumbnail2 = useRef();
    var thumbnail3 = useRef();

    function handleImage(e) {
        const check = e.target.files[0];
        const urlImg = URL.createObjectURL(check);
        setImgMain(urlImg);

        imageMain.current.src = urlImg;
        imageMain.current.style.zIndex = "10";
    }

    function handleThumbnail1(e) {
        const check = e.target.files[0];
        const urlImg = URL.createObjectURL(check);
        setThumbnailOne(thumbnailOne);

        thumbnail1.current.src = urlImg;
        thumbnail1.current.style.zIndex = "10";
    }
    
    function handleThumbnail2(e) {
        const check = e.target.files[0];
        const urlImg = URL.createObjectURL(check);
        setThumbnailTwo(thumbnailTwo);

        thumbnail2.current.src = urlImg;
        thumbnail2.current.style.zIndex = "10";
    }
    
    function handleThumbnail3(e) {
        const check = e.target.files[0];
        const urlImg = URL.createObjectURL(check);
        setThumbnailThree(thumbnailThree);

        thumbnail3.current.src = urlImg;
        thumbnail3.current.style.zIndex = "10";
    }

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [step, setStep] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState();
    const [description, setDescription] = useState("");

    const [imgMain, setImgMain] = useState();
    const [thumbnailOne, setThumbnailOne] = useState();
    const [thumbnailTwo, setThumbnailTwo] = useState();
    const [thumbnailThree, setThumbnailThree] = useState();
    

    useEffect(() => {
        console.log(name);
        console.log(price);
        console.log(step);
        console.log(category);
        console.log(time);
        console.log(description);

        console.log(imgMain);
        console.log(thumbnailOne);
        console.log(thumbnailTwo);
        console.log(thumbnailThree);

    })



    return (
        <div className={cx('wrapper')}>
            <div className={cx('add-product')}>
                <div className={cx('content')}>
                    <div className={cx('img')}>
                        <div className={cx('main-img')}>
                            <input onChange={(e) => handleImage(e)} accept="image/png, image/jpeg" type="file" className={cx('input')} />
                            <div className={cx('word')}>
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                                <p className={cx('content-message')}>Upload a product cover image</p>
                            </div>
                            <img ref={imageMain} src="" alt="" className={cx('image')} />
                        </div>

                        <div className={cx('wrapper-thumbnail')}>
                            <div className={cx('thumbnail')}>
                                <input onChange={(e) => handleThumbnail1(e)} accept="image/png, image/jpeg" type="file" />
                                <div className={cx('word-thumbnail')}>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <img ref={thumbnail1} src="" alt="" className={cx('iamge-thumbnail-1')} />
                            </div>
                            
                            <div className={cx('thumbnail')}>
                                <input onChange={(e) => handleThumbnail2(e)} accept="image/png, image/jpeg" type="file"/>
                                <div className={cx('word-thumbnail')}>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <img ref={thumbnail2} src="" alt="" className={cx('iamge-thumbnail-2')} />
                            </div>
                            
                            <div className={cx('thumbnail')}>
                                <input onChange={(e) => handleThumbnail3(e)} accept="image/png, image/jpeg" type="file"/>
                                <div className={cx('word-thumbnail')}>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <img ref={thumbnail3} src="" alt="" className={cx('iamge-thumbnail-3')} />
                            </div>
                        </div>
                    </div>
    
                    <div className={cx('text')}>
                        <div className={cx('product-name')}>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name" />
                        </div>
                        <div className={cx('price')}>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                            <i class="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div className={cx('step')}>
                            <input value={step} onChange={(e) => setStep(e.target.value)} type="text" placeholder="Step" />
                            <i class="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div className={cx('category')}>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                                <option>Category</option>
                                <option>Beauty</option>
                                <option>Clothing accessories</option>
                                <option>Pet</option>
                                <option>Jewelry</option>
                                <option>Food</option>
                                <option>Transpost</option>
                                <option>Device</option>
                                <option>Furniture</option>
                                <option>Art</option>
                            </select>
                        </div>
                        <div className={cx('condition')}>
                            <select>
                                <option>Condition</option>
                                <option>New</option>
                                <option>Old</option>
                            </select>
                        </div>
                        <div className={cx('time')}>
                            <input value={time} onChange={(e) => setTime(e.target.value)} type="datetime-local" name="txtDatetimeLocal" id="txtDatetimeLocal" />
                        </div>
                    </div>
                </div>
                <div className={cx('description')}>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter some short description about this product..."></textarea>
                </div>
                <div className={cx('wrapper-btn')}>
                    <button className={cx('btn')}>add product</button>
                </div>
            </div>
        </div>
    );
}

export default Add;