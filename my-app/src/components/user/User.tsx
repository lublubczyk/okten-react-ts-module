import { FC } from "react";

import { IUser } from "../../interfaces";
import { MyFuncLiftType } from "../../types";
import style from './User.module.css';

interface IProps { user: IUser; lift: MyFuncLiftType };

const User: FC<IProps> = ({user, lift}) => {
    
    const { id, firstName, lastName, age, gender } = user;
    
    return (
        <div className={style.user}>
            <h4>UserId: {id}; {firstName} {lastName}</h4>
            <h5>Age: {age} Gender: {gender}</h5>
            <button onClick={() => lift(id)}> Show user posts</button>
        </div>
    )
};

export { User };