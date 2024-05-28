import { FC } from "react";

import { IComment } from "../../interfaces";
import style from './Comment.module.css'


const Comment: FC<IComment> = ({ postId, id, name, body }) => {
    return (
        <div className={style.Comment}>
            <h4>Post Id: {postId} Comment Id:{id} </h4>
            <h5>Name: {name}</h5>
            <p>Body: {body}</p>
        </div>
    )
};

export { Comment };