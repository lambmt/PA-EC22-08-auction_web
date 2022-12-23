import classNames from 'classnames/bind';
import styles from './ForgottenPassword.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ForgottenPassword() {

    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log(email);

    })


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Have You Forgotten Your Password?</div>
                <div className={cx('description')}>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail</div>
                <div id="forgotten" className={cx('form')}>
                    <input onChange={(e) => setEmail(e.target.value)} value={email.trimStart()} id="email" name="email" type="text" placeholder="Email" className={cx('form-control')} />
                    <button className={cx('form-submit')}>reset password</button>
                </div>
            </div>
        </div>
    );
}

export default ForgottenPassword;
