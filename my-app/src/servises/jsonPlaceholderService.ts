import { urls } from "../constants";
import { IComment, IPost, IUser } from "../interfaces";
import { IRes } from "../types";
import { axiosService } from "./axiosService";

const jsonPlaceholderService = {
    getAllUsers: (): IRes<IUser[]> => axiosService.get(urls.users),
    getAllPosts: (): IRes<IPost[]> => axiosService.get(urls.posts),
    getAllComments: (): IRes<IComment[]> => axiosService.get(urls.comments)
};

export { jsonPlaceholderService };