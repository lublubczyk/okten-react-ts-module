import { useEffect, useState } from "react";

import { IUser } from "../interfaces";
import { jsonPlaceholderService } from "../servises";
import { IterateData, User } from "../components";

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[] | null>(null);

    useEffect(() => {
        jsonPlaceholderService.getAllUsers().then(({ data }) => setUsers(data));
    }, []);

    return (
        <div>
            {users && <IterateData data={users} renderComponent={(users) => <User {...users} />} />}
        </div>
    )
};

export { UsersPage };