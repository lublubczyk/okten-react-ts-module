import { FC } from "react";

import { IUser } from "../../interfaces";
import style from './User.module.css';

const User: FC<IUser> = ({ id, name, username }) => {
    return (
        <div className={style.User}>
            <h3>Used Id: {id}</h3>
            <h4>Name: {name} </h4>
            <h4>User name: {username}</h4>
        </div>
    )
};

export { User };