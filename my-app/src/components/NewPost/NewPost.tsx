import { FC } from "react";
import { IPost } from "../../interfaces";


interface IProps {newPost:IPost}

const NeWPost: FC<IProps> = ({ newPost: { id, userId, title, body } }) => {
    
    return (
        <div>
            <h1>You created new Post</h1>
            <h2>Post ID: { id}</h2>
            <h3>User ID: {userId}; Title: {title}</h3>
            <p>Body: { body }</p>
        </div>
    )
};

export { NeWPost };