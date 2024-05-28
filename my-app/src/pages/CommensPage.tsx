import { useEffect, useState } from "react";

import { IComment } from "../interfaces";
import { jsonPlaceholderService } from "../servises";
import { Comment, IterateData } from "../components";

const CommentsPage = () => {

    const [comments, setComments] = useState<IComment[] | null>(null);

    useEffect(() => {
        jsonPlaceholderService.getAllComments().then(({ data }) => setComments(data));
    }, [])
    
    return (
        <div>
            {comments && <IterateData data={comments} renderComponent={(comments) => <Comment {...comments} />} />}
        </div>
    )
};

export { CommentsPage };