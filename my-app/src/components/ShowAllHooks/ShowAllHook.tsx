import { ShowPreviousHook } from "../ShowPreviousHook";
import { ShowStorageHook } from "../ShowStorageHook";
import { ShowToggleHook } from "../ShowToggleHook";


const ShowAllHooks = () => {
    
    return (
        <div>
            <h1>Show All Hooks</h1> 
            <hr/>
            <ShowToggleHook />
            <hr/>
            <ShowPreviousHook />
            <hr/>
            <ShowStorageHook/>
        </div>
    )
};

export { ShowAllHooks };