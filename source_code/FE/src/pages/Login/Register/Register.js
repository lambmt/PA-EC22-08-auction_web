import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);


function Register() {

    const aVendor = useRef();
    const aCustomer = useRef();
    const vendor = useRef();
    const [checkVendor, setCheckVendor] = useState(false);
    const [checkCustomer, setCheckCustomer] = useState(true);

    const [fisrtName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopAddress, setShopAddress] = useState("");

    useEffect(() => {
        console.log(fisrtName);
        console.log(lastName);
        console.log(phone);
        console.log(email);
        console.log(password);
        console.log(passwordConfirm);
        console.log(shopName);
        console.log(shopAddress);

        console.log(checkCustomer);
        console.log(checkVendor);
    });

    const handleVendor = (e) => {
        setCheckVendor(aVendor.current.checked);
        setCheckCustomer(aCustomer.current.checked);
        if(aVendor.current.checked === true){
            vendor.current.style.height = '130px';
        } else {
            vendor.current.style.height = '0px';
        }
    }


    return (
        <div id="register" className={cx('form')}>
            <div className={cx('form-group-name')}>
                <div className={cx('form-group-fisrt')}>
                    <input
                        value={fisrtName.trimStart()}
                        onChange={(e) => setFisrtName(e.target.value)}
                        id="fisrtname"
                        rules="required"
                        name="fisrtname"
                        type="text"
                        placeholder="Fisrt Name"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('line')}></div>

                <div className={cx('form-group-last')}>
                    <input
                        value={lastName.trimStart()}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastname"
                        rules="required"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>
            </div>

            <div className={cx('form-group')}>
                <input
                    value={phone.trimStart()}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    rules="required"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className={cx('form-control')}
                />
                <span className={cx('form-message')}></span>
            </div>

            <div className={cx('form-group')}>
                <input
                    value={email.trimStart()}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    rules="required|email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={cx('form-control')}
                />
                <span className={cx('form-message')}></span>
            </div>

            <div className={cx('form-group')}>
                <input
                    value={password.trimStart()}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    rules="required|min:6"
                    name="password"
                    type="password"
                    className={cx('form-control')}
                    placeholder="Password"
                />
                <span className={cx('form-message')}></span>
            </div>

            <div className={cx('form-group')}>
                <input
                    value={passwordConfirm.trimStart()}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    id="confirmPassword"
                    rules="required|min:6"
                    name="confirmPassword"
                    type="password"
                    className={cx('form-control')}
                    placeholder="Confirm Password"
                />
                <span className={cx('form-message')}></span>
            </div>

            <div ref={vendor} className={cx('vendor')}>
                <div className={cx('form-group')}>
                    <input
                        value={shopName.trimStart()}
                        onChange={(e) => setShopName(e.target.value)}
                        id="shopName"
                        rules="required"
                        name="shopName"
                        type="text"
                        className={cx('form-control')}
                        placeholder="Shop Name"
                    />
                    <span className={cx('form-message')}></span>
                </div>
    
                <div className={cx('form-group')}>
                    <input
                        value={shopAddress.trimStart()}
                        onChange={(e) => setShopAddress(e.target.value)}
                        id="shopAddress"
                        rules="required"
                        name="shopAddress"
                        type="text"
                        className={cx('form-control')}
                        placeholder="Shop Address"
                    />
                    <span className={cx('form-message')}></span>
                </div>
            </div>

            <div className={cx('form-group-checkbox')}>
                <input onClick={handleVendor} checked={checkVendor} ref={aVendor} id="aVender" name="option" type="radio" className={cx('form-control-checkbox')} />
                <p className={cx('text')}>I am a vendor</p>
            </div>

            <div className={cx('form-group-checkbox')}>
                <input onClick={handleVendor} checked={checkCustomer} ref={aCustomer} id="aCustomer" name="option" type="radio" className={cx('form-control-checkbox')} />
                <p className={cx('text')}>I am a customer</p>
            </div>

            <button className={cx('form-submit')}>Create Account</button>

            <div className={cx('nocati')}>
                <p>Already have an account?</p>
                <Link to={config.routes.login} className={cx('reset-password')}>
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default Register;