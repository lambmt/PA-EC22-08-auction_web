import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ to, title }) {
    return (
        <NavLink to={to} className={(active) => cx('item-link', {active: active.isActive})} >
            { title }
        </NavLink>
    );
}

Menu.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Menu;