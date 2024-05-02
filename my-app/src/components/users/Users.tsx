import { FC, useEffect, useState } from 'react';

import { MyFuncLiftType } from '../../types';
import style from './Users.module.css';
import { dummyjsonService } from '../../services';
import { IUsers } from '../../interfaces';
import { User } from '../user';

interface IProps { lift: MyFuncLiftType; };

const Users: FC<IProps> = ({ lift }) => {
    
    const [users, setUsers] = useState<IUsers | null>(null);

    useEffect(() => {
        dummyjsonService.getAllUsers().then(({ data }) => setUsers(data));
     }, []);

    return (
        <div className={style.users}>
            <h2 className={style.title}>Users</h2>
            {users && users.users.map((user) => <User key={user.id} user={user} lift={lift} />)}
        </div>
    )
};

export { Users };