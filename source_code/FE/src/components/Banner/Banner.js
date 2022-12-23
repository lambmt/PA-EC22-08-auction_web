import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);


function Banner({ name, priceMin, priceMax, to, src }) {
    return (
        <div className={cx('banner')}>
            <img src={src} alt={name} className={cx('image')} />
            <div className={cx('name')}>{name}</div>
            <div className={cx('price')}>$ {priceMin}  ~  $ {priceMax}</div>
            <Link to={to}><button className={cx('btn')}>auction now</button></Link>
        </div>
    );
}


Banner.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Banner;