import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layout";
import { CommentsPage, PostPage, UsersPage } from "../pages";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            { path: '', element: <Navigate to='users' replace /> },
            { path: 'users', element: <UsersPage /> },
            { path: 'posts', element: <PostPage /> },
            { path: 'comments', element: <CommentsPage /> }
        ]
    }
]);

export { router };