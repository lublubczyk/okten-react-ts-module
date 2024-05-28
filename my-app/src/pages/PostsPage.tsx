import { useEffect, useState } from "react";

import { IPost } from "../interfaces";
import { jsonPlaceholderService } from "../servises";
import { IterateData, Post } from "../components";

const PostPage = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null);

    useEffect(() => {
        jsonPlaceholderService.getAllPosts().then(({ data }) => setPosts(data));
    }, []);

    return (
        <div>
            {posts && <IterateData data={posts} renderComponent={(posts) => <Post {...posts} />} />}
        </div>
    )
};

export { PostPage };