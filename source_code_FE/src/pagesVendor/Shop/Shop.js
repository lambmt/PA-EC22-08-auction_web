import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

import { useRef, useEffect, useState } from "react";


const cx = classNames.bind(styles);

function Shop() {

    var imageMain = useRef();

    function handleImage(e) {
        const check = e.target.files[0];
        const urlImg = URL.createObjectURL(check);
        setImg(urlImg);

        imageMain.current.src = urlImg;
        imageMain.current.style.zIndex = "10";
    }

    const [img, setImg] = useState();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        console.log(img);

        console.log(name);
        console.log(address);
        console.log(phone);

    })


    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop')}>
                <div className={cx('info')}>
                    <div className={cx('main-img')}>
                        <input
                            onChange={(e) => handleImage(e)}
                            accept="image/png, image/jpeg"
                            type="file"
                            className={cx('input')}
                        />
                        <div className={cx('word')}>
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <p className={cx('content-message')}>Upload avatar image</p>
                        </div>
                        <img ref={imageMain} src="" alt="" className={cx('image')} />
                    </div>
                    <div className={cx('text')}>
                        <div className={cx('wrapper-input')}>
                            <label for="storeName">Store Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type='text' id="storeName" placeholder='Store Name' />
                        </div>
                        <div className={cx('wrapper-input')}>
                            <label for="address">Address</label>
                            <input value={address} onChange={(e) => setAddress(e.target.value)} type='text' id="address" placeholder='Address' />
                        </div>
                        <div className={cx('wrapper-input')}>
                            <label for="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' id="phone" placeholder='Phone' />
                        </div>
                    </div>
                </div>
                <div className={cx('result')}>
                    <div className={cx('para')}>
                        <div className={cx('order')}>
                            <table bgcolor="#d5d0e4" height="350" width="300" className={cx('table')}>
                                <tr>
                                    <th colspan="3">
                                        <i class="fa-solid fa-file-lines"></i>
                                        Order
                                    </th>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Wait Confirmation</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Completed</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Cancelled</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Refunded</td>
                                    <td align="center">11</td>
                                </tr>
                            </table>
                        </div>
                        <div className={cx('product')}>
                            <table bgcolor="#d5d0e4" height="350" width="300" className={cx('table')}>
                                <tr>
                                    <th colspan="3">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        Product
                                    </th>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Total</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Live</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Offline</td>
                                    <td align="center">11</td>
                                </tr>
                                <tr>
                                    <td width="50%" align="center">Processing</td>
                                    <td align="center">11</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className={cx('wallet')}>
                        <div className={cx('wrapper-wallet')}>
                            <div className={cx('title')}>Your Wallet</div>
                            <div className={cx('wrapper-input-wallet')}>
                                <div className={cx('name-wallet')}>
                                    <label for="name">Name</label>
                                    <input type="text" id="name" />
                                </div>
                                <div className={cx('balance-wallet')}>
                                    <label for="balance">Balance</label>
                                    <input type="text" id="balance" />
                                </div>
                                <div className={cx('pay-wallet')}>
                                    <label for="pay">Payment Methods</label>
                                    <input type="text" id="pay" />
                                </div>
                            </div>
                            <div className={cx('request')}>
                                <button className={cx('btn')}>Request Withdraw</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
