import classNames from 'classnames/bind';
import styles from './DataProduct.module.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function DataProduct({ data }) {


    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('name')}>{data.name}</h2>
            <div className={cx('start-bid')}>Start bid: <span>{data.startBid}$</span></div>
            <div className={cx('condition')}>Item condition: <span>{data.condition}</span></div>
            <div className={cx('auction-ends')}>Auction ends: <span>{data.auctionEnds}</span></div>
            <div className={cx('price-step')}>Price step: <span>{data.stepPrice}$</span></div>
        </div>
    );
}

export default DataProduct;