import { atom } from 'nanostores';

export let activeItem = atom<string | null>(null);

export const toggleItem = (key: string) => {
    activeItem.set(activeItem.get() === key ? null : key);
}