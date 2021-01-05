import { writable } from 'svelte/store';

export const localStore = <T>(key: string, initial: T) => {
    if (!localStorage) {
        return writable<T>(initial);
    }

    const toString = (value) => JSON.stringify(value, null, 2);
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial));
    }

    const saved = JSON.parse(localStorage.getItem(key));

    const {subscribe, set, update} = writable<T>(saved);

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, toString(value));
            return set(value);
        },
        update
    };
}
