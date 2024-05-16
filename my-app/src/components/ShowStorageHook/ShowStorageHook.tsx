import { useStorage } from "../../hooks"

const ShowStorageHook = () => {

    const [value, setValue, removeValue] = useStorage('key', '');

    return (
        <div>
            <h1> Local Storage: { value }</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={removeValue} >Remove Local Storage</button>
       </div>
    );
};

export { ShowStorageHook };