import { atom } from 'nanostores';

export let activePyramidItem = atom<[string, [number, number]] | null>(null);