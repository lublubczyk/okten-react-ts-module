import { FC } from "react";

import { IPost } from "../../interfaces";
import style from './Post.module.css';

const Post: FC<IPost> = ({ id, userId,title,body }) => {
    return (
        <div className={style.Post}>
            <h5> Post Id: {id} User Id: {userId} </h5>
            <h6>Title: {title}</h6>
            <p>Body: {body }</p>
        </div>
    )
};

export { Post };