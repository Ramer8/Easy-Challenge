import { names } from '../mocks/names'

export const fetchNames = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(names);
        }, 500);
    })
};