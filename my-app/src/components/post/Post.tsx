import { FC } from "react";

import { IPost } from "../../interfaces";
import style from './Post.module.css';

interface IProps { post: IPost };

const Post: FC<IProps> = ({ post: { title, id, body } }) => {
    return (
        <div className={style.post}>
            <h4>Title: {title}</h4>
            <h5>PostId: {id}</h5>
            <h5>Body:</h5>
            <p>{body}</p>
        </div>
    )
};

export { Post };