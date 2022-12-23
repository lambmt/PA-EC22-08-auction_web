import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);


function Search() {

    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log(search);
    })

    return (
        <div className={cx('wrapper')}>
            <input value={search.trimStart()} onChange={(e) => setSearch(e.target.value)} id="search" type="text" className={cx('input')} placeholder=" Search... " />
            <label for="search" className={cx('input-label')}>
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </label>
        </div>
    );
}

export default Search;