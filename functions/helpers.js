import { data } from '../data.js';

export const findById = command => {
    const findById_Array = data.find(x => x.id === command);
    return findById_Array;
}

export const findByNick = command => {
    const findByNick_Array = data.find(y => y.nick === command);
    return findByNick_Array;
}
