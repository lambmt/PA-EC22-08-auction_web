import classNames from "classnames/bind";
import styles from './ListAccount.module.scss';

import avatar from "~/assets/images/admin.png";

const cx = classNames.bind(styles);

function ListAccount() {

    var datas = [
        {
            id: 1,
            role: "vendor",
            avatar: avatar,
            name: 'Nghiant',
            email: 'nghiant@gmail.com',
        },
        {
            id: 1,
            role: "customer",
            avatar: avatar,
            name: 'Nghiant',
            email: 'nghiant@gmail.com',
        },
        {
            id: 1,
            role: "vendor",
            avatar: avatar,
            name: 'Nghiant',
            email: 'nghiant@gmail.com',
        },
        {
            id: 1,
            role: "customer",
            avatar: avatar,
            name: 'Nghiant',
            email: 'nghiant@gmail.com',
        },
    ]



    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')} width="100%">
                <tr>
                    <th height="80" width="20%">ID</th>
                    <th width="40%">Name</th>
                    <th width="20%">Role</th>
                    <th width="20%"></th>
                </tr>
                {
                    datas.map((data, index) => {
                        return <tr key={index} className={cx('row')}>
                            <td height="60" align="center">{data.id}</td>
                            <td align="center">
                                <div className={cx('wrapper-name')}>
                                    <div className={cx('avatar')}>
                                        <img alt="avatar" src={data.avatar} />
                                    </div>
                                    <div className={cx('info')}>
                                        <div className={cx('name')}>{data.name}</div>
                                        <div className={cx('email')}>{data.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td align="center">{data.role}</td>
                            <td align="center">
                                <div className={cx('delete')}><i class="fa-solid fa-xmark"></i></div>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default ListAccount;