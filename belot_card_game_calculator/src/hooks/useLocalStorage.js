import { useState } from "react"

export default function useLocalStorage(key, initialData) {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);
        if (!storageData) {
            return initialData;
        }

        const data = JSON.parse(storageData);

        return data; // returns the data to the state (initial state)
    });

    const setPersistedState = (input) => {
        let value = input;

        if (typeof value === 'function') {
            value = input(state);
        }

        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }

    return [
        state,
        setPersistedState
    ]

}