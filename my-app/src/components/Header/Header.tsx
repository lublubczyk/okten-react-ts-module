import { NavLink } from "react-router-dom"

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to="users"> Users </NavLink>
            <NavLink to="posts"> Posts </NavLink>
            <NavLink to="comments"> Comments </NavLink>
        </div>
    )
};

export {Header}