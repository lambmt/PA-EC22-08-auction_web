import classNames from "classnames/bind";
import styles from './Information.module.scss';

import { useState, useEffect } from "react";


const cx = classNames.bind(styles);

function Information() {

    const [fisrtName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [flat, setFlat] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        console.log(fisrtName);
        console.log(lastName);
        console.log(phone);
        console.log(email);

        console.log(flat);
        console.log(address);
        console.log(city);
        console.log(state);
    })
    


    return (
        <div className={cx('wrapper')}>
            <div className={cx('personal')}>
                <h2 className={cx('title')}>personal detail</h2>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="firt-name">First Name</label>
                        <input value={fisrtName} onChange={(e) => setFisrtName(e.target.value)} type="text" name="firt-name" id="firt-name" placeholder="First Name" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="last-name">Last Name</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="last-name" id="last-name" placeholder="Last Name" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="phone-number">Phone Number</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone-number" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
                    </div>
                </div>
            </div>

            <div className={cx('shipping')}>
                <h2 className={cx('title')}>shipping address</h2>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="flat-plot">Flat / Plot</label>
                        <input value={flat} onChange={(e) => setFlat(e.target.value)} type="text" name="flat-plot" id="flat-plot" placeholder="Flat / Plot" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="address">Address</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Address" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="city">City</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" name="city" id="city" placeholder="City" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="region-state">Region / State</label>
                        <input value={state} onChange={(e) => setState(e.target.value)} type="text" name="region-state" id="region-state" placeholder="Region / State" />
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-btn')}>
                <button className={cx('btn')}>save setting</button>
            </div>
        </div>
    );
}

export default Information;