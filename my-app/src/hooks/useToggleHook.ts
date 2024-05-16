import { useState } from "react"


const useToggle = (defoultValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(defoultValue);
    const toggleValue = () => { setValue(prevValue => !prevValue) };
    return [value, toggleValue];
};

export { useToggle };