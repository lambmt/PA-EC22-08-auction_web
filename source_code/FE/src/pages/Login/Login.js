import classNames from "classnames/bind";
import styles from './Login.module.scss';
import SignIn from "./SignIn";
import Register from "./Register";

import { useRef, useState } from "react";

const cx = classNames.bind(styles);


function Login() {

    const [slide, setSlide] = useState(false);
    const [login, setLogin] = useState(false);

    var handleSignIn = () => {
        setSlide('slide-navi-right-to-left');
        setLogin('login-left-to-right');
    };
    
    var handleRegister = () => {
        setSlide('slide-navi-left-to-right');
        setLogin('login-right-to-left');
    };


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>My account</div>
                <div className={cx('navigation')}>
                    <span onClick={handleSignIn} className={cx('sign-in')}>Sign in</span>
                    <span onClick={handleRegister} className={cx('register')}>Register</span>
                    <div className={cx('bg-active', slide)}></div>
                </div>
                <div className={cx('form-login')}>
                    <div className={cx('wrapper-login', login)}>
                        <SignIn />
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;