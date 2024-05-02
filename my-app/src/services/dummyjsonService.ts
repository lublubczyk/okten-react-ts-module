import { axiosService } from "./axiosService";

import { urls } from "../constants";
import { IPosts, IUsers } from "../interfaces";
import { IRes } from "../types";

const dummyjsonService = {
    getAllUsers: (): IRes<IUsers> => axiosService.get(urls.users),
    getPostsByUserId: (id: number): IRes<IPosts> => axiosService.get(urls.users + id + urls.posts),
};

export { dummyjsonService };