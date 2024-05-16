import { useToggle } from "../../hooks"

const ShowToggleHook = () => {
    const [value, toggle] = useToggle(false);
    return (
        <div>
            <h1>{value ? 'True' : 'False'}</h1>
            <button onClick={toggle}> Toggle </button>
        </div>
    )
};

export { ShowToggleHook };