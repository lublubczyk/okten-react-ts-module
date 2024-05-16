import { useState } from "react"

import { usePrevious } from "../../hooks";

const ShowPreviousHook = () => {

    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <h1>Count: {count} Previous Count: {prevCount}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)} > Increment </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} > Decrement </button>
        </div>
    )
};

export { ShowPreviousHook };
