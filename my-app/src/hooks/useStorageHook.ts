import { useState } from "react"

const useStorage = <T>(key: string, value: T): [T, (val: T) => void, () => void] => {

    const [storageValue, setStorageValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
    });
    const setValue = (val: T) => {
        setStorageValue(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    };
    const removeValue = () => {
        window.localStorage.removeItem(key);
        setStorageValue(value);
    };
    
    return [storageValue, setValue, removeValue];
};

export { useStorage };