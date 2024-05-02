import { FC, useEffect, useState } from 'react';

import style from './Posts.module.css';
import { IPosts } from '../../interfaces';
import { dummyjsonService } from '../../services';
import { Post } from '../post';

interface IProps { userId: number | null };

const Posts: FC<IProps> = ({ userId }) => {
    
    const [posts, setPosts] = useState<IPosts | null>(null);

    useEffect(() => {
        if (userId) dummyjsonService.getPostsByUserId(userId).then(({ data }) => setPosts(data))
    }, [userId]);
   
    console.log(posts);
    return (
        <div className={style.posts}>
            <h2 className={style.title}>{posts ? 'UserId: ' + userId + ' Posts' : 'Posts'}</h2>
            {posts && posts.posts.map(post=> <Post post={post} key={post.id}/>)}
        </div>
    )
};

export { Posts };