import classNames from 'classnames/bind';
import styles from './DataProduct.module.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function DataProduct({ data }) {

    var currentBuy = data.currentBid + data.stepPrice;
    const [value, setValue] = useState(currentBuy);

    useEffect(() => {

    });

    const handleRaise = () => {
        currentBuy = parseInt(value) + data.stepPrice;
        setValue(currentBuy);
    }

    const handleReduce = () => {
        currentBuy = parseInt(value) - data.stepPrice;
        if(currentBuy >= data.currentBid + data.stepPrice){
            setValue(currentBuy);
        }
    }

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleOnBlur = (e) => {
        if(value < data.currentBid + data.stepPrice){
            setValue(data.currentBid + data.stepPrice);
        }
    }



    var timeleft = {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
    }
    
    timeLeft(timeleft);
    
    const [day, setDay] = useState(timeleft.day);
    const [hour, setHour] = useState(timeleft.hour);
    const [min, setMin] = useState(timeleft.min);
    const [sec, setSec] = useState(timeleft.sec);

    setInterval(() => {
        timeLeft(timeleft);

        setDay(timeleft.day);
        setHour(timeleft.hour);
        setMin(timeleft.min);
        setSec(timeleft.sec);
    }, 1000)

    function timeLeft(timeleft) {

        var totalSec1;
        var totalSec2;
        var totalSec, day, month, year, hour, min, sec, soNgay;

        var today = new Date();
        var date = (today.getMonth()+1)+' '+today.getDate()+', '+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

    
        function toDateTime(secx){
            sec = secx / 1000;
            min = Math.floor(sec / 60);
            sec -= min * 60;
    
            hour = Math.floor(min / 60);
            min -= hour * 60;
    
            day = Math.floor(hour / 24);
            hour -= day * 24;
    
            year = Math.floor(day / 365);
            day -= year * 365;
    
            soNgay = day;
            timThang(soNgay);
        }
    
        var ngayTrongThang = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // Áp dụng tính cho các tháng 30, 31 hay 28 ngày.
        function timThang(soNgay){
            for (var i = 0; i < 11; i++)
            {
                if (soNgay >= ngayTrongThang[i]){
                    soNgay -= ngayTrongThang[i];
                } else {
                    month = i;
                    day = soNgay;
                    break;
                }
            }
        }
    
        function displayData(){
            timeleft.day = soNgay;
            timeleft.hour = hour;
            timeleft.min = min;
            timeleft.sec = sec;
        }
    
        function cal(){
            totalSec1 = Date.parse(`${dateTime} UTC`)
            totalSec2 = Date.parse(`${data.auctionEnds} UTC`)
    
            totalSec = Math.abs(totalSec2-totalSec1);
    
            toDateTime(totalSec);
    
            displayData();
        }
    
        cal();
    }



    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('name')}>{data.name}</h2>
            <div className={cx('start-bid')}>Start bid: <span>{data.startBid}$</span></div>
            <div className={cx('condition')}>Item condition: <span>{data.condition}</span></div>
            <div className={cx('auction-ends')}>Auction ends: <span>{data.auctionEnds}</span></div>
            <div className={cx('time-left')}>
                <span>Time Left:</span>
                <div className={cx('wrapper-time')}>
                    <div className={cx('time')}>
                        <span className={cx('time-num')}>{day}</span>
                        <span className={cx('time-text')}>Days</span>
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('time-num')}>{hour}</span>
                        <span className={cx('time-text')}>Hours</span>
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('time-num')}>{min}</span>
                        <span className={cx('time-text')}>Minutes</span>
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('time-num')}>{sec}</span>
                        <span className={cx('time-text')}>Seconds</span>
                    </div>
                </div>
            </div>
            <div className={cx('current-bid')}>Current bid: <span>{data.currentBid}$</span></div>
            <div className={cx('price-step')}>Price step: <span>{data.stepPrice}$</span></div>

            <div className={cx('buy')}>
                <div onClick={handleReduce} className={cx('reduce')}><i class="fa-solid fa-minus"></i></div>
                <div className={cx('input-buy')}>
                    <input 
                        type='text' 
                        value={value} 
                        onChange={(e) => handleOnChange(e)}
                        onBlur={(e) => handleOnBlur(e)}
                    />
                    $
                </div>
                <div onClick={handleRaise} className={cx('raise')}><i class="fa-solid fa-plus"></i></div>
                {
                    localStorage.getItem('privilege') === 'vendor' ?
                    "" : localStorage.getItem('login') === 'true' ?
                    <button className={cx('bid')}>Bid</button> :
                    <Link className={cx('link-login')} to={config.routes.login}><button className={cx('bid-false')}>Bid</button></Link>
                }
            </div>
        </div>
    );
}

export default DataProduct;