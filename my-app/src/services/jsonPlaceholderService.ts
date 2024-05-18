import { urls } from "../constants";
import { IPost } from "../interfaces";
import { IRes } from "../types";
import { axiosSevice } from "./axiosService";


const jsonPlaceholderService = {
    getAllPosts: ():IRes<IPost[]> => axiosSevice.get(urls.posts),
    createNewPost: (post: IPost):IRes<IPost> => axiosSevice.post(urls.posts, post)
};

export { jsonPlaceholderService };