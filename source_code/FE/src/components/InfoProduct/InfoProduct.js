import classNames from 'classnames/bind';
import styles from './InfoProduct.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import config from '~/config';

const cx = classNames.bind(styles);


function InfoProduct({ data }) {

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
            <div className={cx('header')}>
                <Link to={config.routes.detailProduct} className={cx('img')}>
                    <img src={data.img} alt={data.name} />
                </Link>
            </div>

            <div className={cx('time-left')}>
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

            <div className={cx('info')}>
                <Link to={config.routes.detailProduct} className={cx('name-name')}>{data.name}</Link>
                <div className={cx('current-bid')}>Current Bid: ${data.currentBid}.00</div>
            </div>

            <Link to={data.toSender} className={cx('sender')}>
                <img src={data.avatarSender} alt={data.nameSender} className={cx('avatar')} />
                <div className={cx('name-sender')}>{data.nameSender}</div>
            </Link>

            <Link to={config.routes.detailProduct} className={cx('icon-auction')}>
                <i class="fa-sharp fa-solid fa-gavel"></i>
                <div className={cx('auction-sender')}>Add bid now</div>
            </Link>

        </div>
    );
}

InfoProduct.propTypes = {
    toProduct: PropTypes.string,
    src: PropTypes.string.isRequired,
    nameProduct: PropTypes.string.isRequired,
    quantityAuction: PropTypes.number,
    toSender: PropTypes.string,
    avatarSender: PropTypes.string,
    nameSender: PropTypes.string,
};

export default InfoProduct;