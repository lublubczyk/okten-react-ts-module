import { useForm } from "react-hook-form";
import { FC } from "react";
import { joiResolver } from '@hookform/resolvers/joi';

import { IPost } from "../../interfaces";
import { jsonPlaceholderService } from "../../services";
import { newPostValidator } from "../../validators";

interface IProps {setNewPost: (post:IPost)=> void }

const CreatePostForm:FC<IProps> = ({setNewPost}) => {

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<IPost>({
        mode: 'all',
        resolver: joiResolver(newPostValidator)
    });
 
    const seve = (post: IPost) => {
        jsonPlaceholderService.createNewPost(post).then(({ data }) => setNewPost(data));
        reset();
    };

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit(seve)}>
                <input type="number" placeholder="User ID" {...register('userId')} />
                <br/>
                {errors.userId && <span>{errors.userId.message }</span>}
                <br/>
                <input type="text" placeholder="Post title" {...register('title')} />
                <br />
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" placeholder="Post body" {...register('body')} />
                <br />
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button disabled={!isValid} >Create</button>
            </form>
        </div>
    )
};

export { CreatePostForm };